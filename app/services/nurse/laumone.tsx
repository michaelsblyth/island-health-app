import React from "react";
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NurseLaumone() {
  const sitePhone = "01481 256517";

  const handlePress = (service: string) => {
    Alert.alert(
      service,
      `Would you like to call ${sitePhone} to book this service?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Call",
          onPress: () => Linking.openURL(`tel:${sitePhone}`),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={require("../../../assets/images/splash.png")} style={styles.logo} />
      <Text style={styles.title}>Nurse – L'Aumone</Text>

      {["Blood Test", "ECG", "Spirometry/FENO", "Dressing"].map((service) => (
        <TouchableOpacity key={service} style={styles.button} onPress={() => handlePress(service)}>
          <Text style={styles.buttonText}>{service}</Text>
        </TouchableOpacity>
      ))}

      {/* ✅ Report Fault Link */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Notice an issue?{" "}
          <Text style={styles.link} onPress={() => Linking.openURL("/report-fault")}>
            Report app fault here
          </Text>
          .
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 20, paddingTop: 30 },
  logo: {
    width: 250,
    height: 60,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  button: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3CB5A3",
    marginBottom: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonText: { fontSize: 18, fontWeight: "600", color: "#1E355F" },
  footer: {
    marginTop: 30,
    alignItems: "center"
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center"
  },
  link: {
    color: "#1E90FF",
    textDecorationLine: "underline"
  }
});
