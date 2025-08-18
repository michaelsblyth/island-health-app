import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

export default function TeamLanding() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Logo */}
        <Image
          source={require("../../../assets/images/splash.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Meet the Team</Text>
        <Text style={styles.subtitle}>Choose a location</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/services/team/laumone")}
        >
          <Text style={styles.buttonText}>L’Aumone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/services/team/stsampsons")}
        >
          <Text style={styles.buttonText}>St Sampson’s</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/services/team/town")}
        >
          <Text style={styles.buttonText}>Town</Text>
        </TouchableOpacity>

        {/* Report fault link */}
        <TouchableOpacity onPress={() => router.push("/report-fault")}>
          <Text style={styles.reportLink}>Report an app fault here</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 20, paddingTop: 30 },
  logo: {
    width: 250,
    height: 60,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E355F",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
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
  reportLink: {
    fontSize: 14,
    color: "#1E90FF",
    textAlign: "center",
    marginTop: 24,
    textDecorationLine: "underline",
  },
});
