import { useRouter } from "expo-router";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Book() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/images/splash.png")} style={styles.logo} />
      
      <Text style={styles.title}>Book Appointment</Text>
      <Text style={styles.subtitle}>Choose a service</Text>

      {/* ✅ GP Appointments now navigates to /services/gp */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/services/gp")}>
        <Text style={styles.buttonText}>GP Appointment</Text>
      </TouchableOpacity>

      {/* ✅ Nurse Appointment (goes to services/nurse) 
      //<TouchableOpacity style={styles.button} onPress={() => router.push("/services/nurse")}>
        //<Text style={styles.buttonText}>Nurse Appointment</Text>
      //</TouchableOpacity> */}

      <TouchableOpacity style={styles.button} onPress={() => router.push("/services/physio")}>
        <Text style={styles.buttonText}>Physiotherapy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/services/osteo")}>
        <Text style={styles.buttonText}>Osteopathy</Text>
      </TouchableOpacity>
      {/* ✅ Vaccination (goes to services/vaccination) */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/services/vaccination")}>
        <Text style={styles.buttonText}>Vaccination</Text>
      </TouchableOpacity>

      {/* ✅ Travel Health (we can later make this a direct link) */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/services/travelhealth")}>
        <Text style={styles.buttonText}>Travel Health</Text>
      </TouchableOpacity>

      {/* 📣 Report app fault link */}
      <TouchableOpacity onPress={() => router.push("/report-fault")}>
        <Text style={styles.reportLink}>Report an app fault here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    paddingTop: 50,  
    backgroundColor: "#fff" 
  },
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
  buttonText: { 
    fontSize: 18, 
    fontWeight: "600", 
    color: "#1E355F" 
  },
  reportLink: {
    fontSize: 14,
    color: "#1E90FF",
    textAlign: "center",
    marginTop: 20,
    textDecorationLine: "underline"
  }
});