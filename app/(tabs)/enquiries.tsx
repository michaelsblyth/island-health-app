import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Enquiries() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const handleSubmit = async (clinicName: string, recipient: string) => {
    if (!name || !email || !enquiry) {
      Alert.alert("Error", "Please complete all fields.");
      return;
    }

    try {
      const response = await fetch("https://island-health-backend.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `📬 Enquiry to ${clinicName}`,
          name,
          email,
          message: enquiry,
          toOverride: recipient, // optional override field
        }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert("Sent", `Your enquiry was sent to ${clinicName}.`);
        setName("");
        setEmail("");
        setEnquiry("");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "There was a problem sending your enquiry.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={require("../../assets/images/splash.png")} style={styles.logo} />
        <Text style={styles.title}>Enquiries</Text>
        <Text style={styles.subtitle}>Get in touch with one of our clinics</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, styles.messageBox]}
          placeholder="Your Enquiry"
          value={enquiry}
          onChangeText={setEnquiry}
          multiline
        />

        {/* 🏥 Buttons for each clinic */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit("L'aumone", "LArequests@health.gg")}
        >
          <Text style={styles.buttonText}>Submit to L'Aumone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit("St Sampsons", "SSrequests@health.gg")}
        >
          <Text style={styles.buttonText}>Submit to St Sampsons</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit("Town", "FHrequests@health.gg")}
        >
          <Text style={styles.buttonText}>Submit to Town</Text>
        </TouchableOpacity>

        {/* 🐞 Report bug link */}
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
    marginBottom: 10,
    color: "#1E355F",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  messageBox: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#3CB5A3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  reportLink: {
    fontSize: 14,
    color: "#1E90FF",
    textAlign: "center",
    marginTop: 30,
    textDecorationLine: "underline",
  },
});
