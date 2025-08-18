import { useRouter } from "expo-router";
import React from "react";
import {
    Alert,
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function PhysioTown() {
  const router = useRouter();

  // 🏥 Town phone & (optional) booking link
  const sitePhone = "01481 724747";
  const bookingLink = ""; // put your Town physio booking URL here when ready

  const handlePress = (url?: string) => {
    if (url && url.length > 0) {
      router.push({ pathname: "/webview", params: { url } });
    } else {
      Alert.alert(
        "Call to book",
        `Would you like to call ${sitePhone}?`,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Call", onPress: () => Linking.openURL(`tel:${sitePhone}`) },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/splash.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Physiotherapy — Town</Text>

      <TouchableOpacity style={styles.button} onPress={() => handlePress(bookingLink)}>
        <Text style={styles.buttonText}>Book Physiotherapy</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Notice an issue?{" "}
          <Text style={styles.link} onPress={() => router.push("/report-fault")}>
            Report app fault here
          </Text>
          .
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFB" },
  logo: { width: 200, height: 80, alignSelf: "center", marginBottom: 20 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E355F",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#3CB5A3",
    alignItems: "center",
  },
  buttonText: { fontSize: 20, fontWeight: "600", color: "#1E355F" },
  footer: { marginTop: 30, alignItems: "center" },
  footerText: { fontSize: 14, color: "#666", textAlign: "center" },
  link: { color: "#1E90FF", textDecorationLine: "underline" },
});
