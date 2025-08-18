import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Specialist() {
  const router = useRouter();

  const handlePress = async (service: string, link?: string) => {
    if (link) {
      try {
        await WebBrowser.openBrowserAsync(link);
      } catch (error) {
        Alert.alert("Error", "Unable to open the booking page.");
      }
    } else {
      Alert.alert(`${service}`, "Please call the surgery to book this service.");
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={require("../../../assets/images/splash.png")} style={styles.logo} />

      <Text style={styles.title}>Specialist Appointments</Text>
      <Text style={styles.subtitle}>Choose a specialist service</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePress("Mole Mapping", "https://patient.england.medicus.health/385291/booking/public/01985ab5-3f02-7029-bbd5-ca170cbf47a2")}
      >
        <Text style={styles.buttonText}>Mole Mapping</Text>
      </TouchableOpacity>

      {[
        "Allergy",
        "Headache",
        "Menopause",
        "Cardiology",
        "Microsuction",
        "Dermatology",
        "Sports and Exercise Medicine",
        "Psychiatry",
        "Vasectomy"
      ].map((service) => (
        <TouchableOpacity 
          key={service} 
          style={styles.button} 
          onPress={() => handlePress(service)}
        >
          <Text style={styles.buttonText}>{service}</Text>
        </TouchableOpacity>
      ))}

      {/* ✅ Report Fault Link */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Notice an issue?{" "}
          <Text style={styles.link} onPress={() => router.push("/report-fault")}>
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
    width: 200,
    height: 60,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  subtitle: { fontSize: 18, marginBottom: 20, textAlign: "center", color: "#555" },
  button: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3CB5A3",
    marginBottom: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: { 
    fontSize: 18, 
    fontWeight: "600", 
    color: "#1E355F" 
  },
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
