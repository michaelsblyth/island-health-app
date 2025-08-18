import * as WebBrowser from "expo-web-browser";
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

export default function TravelHealth() {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [previousVaccines, setPreviousVaccines] = useState("");
  const [gpName, setGpName] = useState("");

  const handleSubmit = async () => {
    const subject = "Travel Health Form Submission";
    const message = `
Full Name: ${fullName}
Date of Birth: ${dob}
Email: ${email}
Destination(s): ${destination}
Travel Date: ${travelDate}
Accommodation: ${accommodation}
Previous Vaccinations: ${previousVaccines}
GP Name: ${gpName}
    `;

    const payload = {
      subject,
      name: fullName,
      email,
      message,
    };

    console.log("📤 Sending form data...");
    console.log(payload);

    try {
      const response = await fetch("https://island-health-backend.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("✅ Response from backend:", data);

      if (data.success) {
        Alert.alert("Success", "Your travel enquiry has been submitted.");
        setFullName("");
        setDob("");
        setEmail("");
        setDestination("");
        setTravelDate("");
        setAccommodation("");
        setPreviousVaccines("");
        setGpName("");
      } else {
        Alert.alert("Error", "Failed to send your enquiry. Please try again.");
      }
    } catch (error) {
      console.error("❌ Frontend fetch error:", error);
      Alert.alert("Error", "An error occurred while sending your enquiry.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={require("../../../assets/images/splash.png")} style={styles.logo} />

        <Text style={styles.title}>Travel Health Service</Text>

        <Text style={styles.text}>
          Planning a trip abroad? We offer expert travel health advice and vaccinations for a wide range of destinations.
          Book your appointment early to ensure you have time for all recommended vaccinations.
        </Text>

        <Text style={styles.text}>
          Our experienced nurses will discuss your itinerary and medical history, recommend the right vaccines and provide
          useful travel health tips to keep you safe while abroad.
        </Text>

        <Text
          style={styles.link}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://islandhealth.co.uk/wp-content/uploads/2025/07/Travel-Vaccination-Price-List25b.pdf"
            )
          }
        >
          📄 View Travel Vaccination Price List
        </Text>

        <Text style={styles.subtitle}>📋 Request a Travel Health Appointment</Text>

        <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
        <TextInput style={styles.input} placeholder="Date of Birth (DD/MM/YYYY)" value={dob} onChangeText={setDob} />
        <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Destination(s)" value={destination} onChangeText={setDestination} />
        <TextInput style={styles.input} placeholder="Travel Date" value={travelDate} onChangeText={setTravelDate} />
        <TextInput
          style={styles.input}
          placeholder="Type of Accommodation (e.g. Hotel, Hostel, Camping)"
          value={accommodation}
          onChangeText={setAccommodation}
        />
        <TextInput
          style={styles.input}
          placeholder="Previous Vaccinations (if any)"
          value={previousVaccines}
          onChangeText={setPreviousVaccines}
        />
        <TextInput style={styles.input} placeholder="Your GP Name" value={gpName} onChangeText={setGpName} />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Form</Text>
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
    marginBottom: 30,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, textAlign: "center", color: "#1E355F" },
  subtitle: { fontSize: 20, fontWeight: "600", marginVertical: 15, textAlign: "center", color: "#3CB5A3" },
  text: { fontSize: 16, color: "#444", marginBottom: 12, lineHeight: 22 },
  link: { fontSize: 16, color: "#1E90FF", marginBottom: 20, textDecorationLine: "underline" },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#1E355F",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});