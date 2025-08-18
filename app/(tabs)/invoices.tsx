// app/(tabs)/invoices.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PaymentsPage() {
  const router = useRouter();

  const [patientNumber, setPatientNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState(""); // NEW
  const [amount, setAmount] = useState("");

  // RomanCart constants
  const STORE_ID = "57686";
  const ITEM_NAME = "Payment";
  const QUANTITY = "1";

  const buildRomanCartUrl = () => {
    // Include DoB in the descriptor so staff can recognise the payer
    const itemname2 = `${patientNumber.trim()}, ${fullName.trim()}, ${dob.trim()}`;

    const price = Number(amount);
    if (Number.isNaN(price) || price <= 0) {
      Alert.alert("Invalid amount", "Please enter a valid positive amount.");
      return null;
    }

    const qs = new URLSearchParams({
      storeid: STORE_ID,
      itemname: ITEM_NAME,
      quantity: QUANTITY,
      price: price.toFixed(2),
      itemname2,
    });

    return `https://www.romancart.com/cart.asp?${qs.toString()}`;
  };

  const handleSubmit = () => {
    if (!fullName || !amount) {
      Alert.alert("Missing details", "Please complete Full Name and Amount.");
      return;
    }
    const url = buildRomanCartUrl();
    if (!url) return;
    router.push({ pathname: "/webview", params: { url } });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={require("../../assets/images/splash.png")} style={styles.logo} />
      <Text style={styles.title}>Make a Payment</Text>

      <Text style={styles.label}>Patient Number (if known)</Text>
      <TextInput
        style={styles.input}
        value={patientNumber}
        onChangeText={setPatientNumber}
        keyboardType="number-pad"
        placeholder="e.g. 12345"
      />

      <Text style={styles.label}>Patient Full Name</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="e.g. Jane Smith"
      />

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        placeholder="e.g. 01/01/1970"
      />

      <Text style={styles.label}>Amount (£)</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="e.g. 25.00"
        keyboardType="decimal-pad"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Make Payment</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 20, paddingTop: 30 },
  logo: {
    width: 220,
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
    marginBottom: 20,
  },
  label: { fontSize: 16, marginBottom: 8, color: "#1E355F" },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  submitButton: {
    backgroundColor: "#1E355F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  footer: { marginTop: 24, alignItems: "center" },
  footerText: { fontSize: 14, color: "#666", textAlign: "center" },
  link: { color: "#1E90FF", textDecorationLine: "underline" },
});
