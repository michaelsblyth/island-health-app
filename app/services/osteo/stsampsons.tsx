import { useRouter } from "expo-router";
import React from "react";
import { Alert, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OsteoStSampsons() {
  const router = useRouter();
  const sitePhone = "01481 245915";
  const bookingLink = "";

  const openBooking = () => {
    if (bookingLink) {
      router.push({ pathname: "/webview", params: { url: bookingLink } });
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
      <Image source={require("../../../assets/images/splash.png")} style={styles.logo} />
      <Text style={styles.title}>Osteopathy – St Sampson’s</Text>

      <TouchableOpacity style={styles.button} onPress={openBooking}>
        <Text style={styles.buttonText}>Book Osteopathy</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/report-fault")}>
        <Text style={styles.reportLink}>Report an app fault here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFB" },
  logo: { width: 200, height: 80, resizeMode: "contain", alignSelf: "center", marginBottom: 20 },
  title: { fontSize: 26, fontWeight: "bold", color: "#1E355F", marginBottom: 20, textAlign: "center" },
  button: {
    backgroundColor: "#ffffff", padding: 20, borderRadius: 12, marginBottom: 15,
    borderWidth: 1, borderColor: "#3CB5A3", alignItems: "center"
  },
  buttonText: { fontSize: 18, fontWeight: "600", color: "#1E355F" },
  reportLink: { fontSize: 14, color: "#1E90FF", textAlign: "center", marginTop: 30, textDecorationLine: "underline" },
});
