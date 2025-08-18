import { useRouter } from "expo-router";
import React from "react";
import { Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function VaccinationMenu() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={require("../../../assets/images/splash.png")} style={styles.logo} />

        <Text style={styles.title}>Vaccinations</Text>
        <Text style={styles.subtitle}>Choose a service</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/services/vaccination/laumone")}>
          <Text style={styles.buttonText}>L'Aumone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/services/vaccination/stsampsons")}>
          <Text style={styles.buttonText}>St Sampson's</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/services/vaccination/town")}>
          <Text style={styles.buttonText}>Town</Text>
        </TouchableOpacity>

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 20, paddingTop: 50 },
  logo: {
    width: 250,
    height: 60,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 30,
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
    alignItems: "center"
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
