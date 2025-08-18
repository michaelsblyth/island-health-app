import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";

// Foreground notifications should show an alert
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function NotificationsTest() {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);
  const [lastNotification, setLastNotification] = useState<string>("");
  const [error, setError] = useState<string>("");
  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const token = await registerForPushNotificationsAsync();
        setExpoPushToken(token ?? null);
      } catch (e: any) {
        setError(String(e?.message ?? e));
        console.warn(e);
      }
    })();

    // Foreground notifications
    notificationListener.current = Notifications.addNotificationReceivedListener(n => {
      setLastNotification(JSON.stringify(n.request.content, null, 2));
    });

    // When user taps a notification
    responseListener.current = Notifications.addNotificationResponseReceivedListener(_res => {
      // router.push("/some/route");
    });

    // cleanup
    return () => {
      if (notificationListener.current)
        Notifications.removeNotificationSubscription(notificationListener.current);
      if (responseListener.current)
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* If this path is wrong, comment the Image line below */}
      <Image source={require("../assets/images/splash.png")} style={styles.logo} />
      <Text style={styles.title}>Push Notifications Test</Text>

      <Text style={styles.label}>Your Expo Push Token:</Text>
      <Text selectable style={styles.codeBlock}>
        {expoPushToken ?? "(requesting… allow notifications and wait a moment)"}
      </Text>

      {error ? (
        <>
          <Text style={[styles.label, { color: "#B00020" }]}>Error:</Text>
          <Text selectable style={styles.codeBlockSmall}>{error}</Text>
          <Text selectable style={styles.codeBlockSmall}>
            projectId detected: {String(
              Constants?.easConfig?.projectId ??
              (Constants as any)?.expoConfig?.extra?.eas?.projectId ??
              "none"
            )}
          </Text>
        </>
      ) : null}

      <View style={styles.row}>
        <Button title="Send LOCAL test notification" onPress={sendLocalNotification} />
      </View>

      <Text style={styles.label}>Last Foreground Notification:</Text>
      <Text selectable style={styles.codeBlockSmall}>
        {lastNotification || "(none yet)"}
      </Text>

      <Text style={styles.report}>
        Notice an issue?{" "}
        <Text style={styles.link} onPress={() => router.push("/report-fault")}>
          Report app fault here
        </Text>.
      </Text>
    </ScrollView>
  );
}

/** Registers for permissions and returns an Expo push token */
async function registerForPushNotificationsAsync(): Promise<string | undefined> {
  if (!Device.isDevice) {
    Alert.alert("Notifications", "Push notifications require a physical device.");
    return;
  }

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    throw new Error("Permission not granted.");
  }

  // Resolve EAS project id
  const hardcodedFallback = "20ca376e-2584-4ba9-9ee6-e289e9012a4e"; // replace if your EAS project id differs
  const projectId =
    Constants?.easConfig?.projectId ??
    (Constants as any)?.expoConfig?.extra?.eas?.projectId ??
    hardcodedFallback;

  const { data } = await Notifications.getExpoPushTokenAsync({ projectId });
  if (!data) throw new Error("Token request returned empty.");
  return data;
}

/** Local notification helper */
function sendLocalNotification() {
  Notifications.scheduleNotificationAsync({
    content: { title: "Hello from Island Health 👋", body: "This is a local test notification." },
    trigger: null,
  }).catch(console.warn);
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 30, backgroundColor: "#fff", minHeight: "100%" },
  logo: { width: 220, height: 60, resizeMode: "contain", alignSelf: "center", marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "700", color: "#1E355F", textAlign: "center", marginBottom: 16 },
  label: { fontSize: 16, fontWeight: "600", color: "#1E355F", marginTop: 8 },
  codeBlock: { marginTop: 6, padding: 12, backgroundColor: "#F3F5F7", borderRadius: 8, fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace" },
  codeBlockSmall: { marginTop: 6, padding: 12, backgroundColor: "#F9FAFB", borderRadius: 8, fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace" },
  row: { marginTop: 12, marginBottom: 12 },
  report: { fontSize: 14, color: "#666", textAlign: "center", marginTop: 24 },
  link: { color: "#1E90FF", textDecorationLine: "underline" },
});
