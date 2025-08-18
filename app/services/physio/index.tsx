import { useRouter } from "expo-router";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PhysioMenu() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={require("../../../assets/images/splash.png")} style={styles.logo} />

        <Text style={styles.title}>Physiotherapy</Text>
        <Text style={styles.subtitle}>Choose a location</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/services/physio/laumone")}>
          <Text style={styles.buttonText}>L'Aumone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/services/physio/stsampsons")}>
          <Text style={styles.buttonText}>St Sampson’s</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/services/physio/town")}>
          <Text style={styles.buttonText}>Town</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/report-fault")}>
          <Text style={styles.reportLink}>Report an app fault here</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 20, paddingTop: 50 },
  logo: { width: 250, height: 60, resizeMode: "contain", alignSelf: "center", marginBottom: 30 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, textAlign: "center", color: "#1E355F" },
  subtitle: { fontSize: 18, marginBottom: 20, textAlign: "center", color: "#555" },
  button: {
    padding: 15, borderRadius: 8, borderWidth: 1, borderColor: "#3CB5A3",
    marginBottom: 15, backgroundColor: "#fff", alignItems: "center"
  },
  buttonText: { fontSize: 18, fontWeight: "600", color: "#1E355F" },
  reportLink: { fontSize: 14, color: "#1E90FF", textAlign: "center", marginTop: 30, textDecorationLine: "underline" },
});