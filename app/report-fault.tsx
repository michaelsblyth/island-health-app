import React, { useState } from "react";
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

export default function ReportFault() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://island-health-backend.onrender.com/report-fault", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert("Submitted", "Thank you for your feedback!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      Alert.alert("Error", "There was a problem sending your message.");
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require("../assets/images/splash.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Report an App Fault</Text>
        <Text style={styles.subtitle}>Let us know if something isn’t working</Text>

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
          placeholder="Describe the issue..."
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
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
    marginBottom: 10,
    textAlign: "center",
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
  submitButton: {
    backgroundColor: "#1E355F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
