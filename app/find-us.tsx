import React from "react";
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FindUs() {
  const locations = [
    {
      name: "L'Aumone Surgery",
      address: "L'Aumone, St Peter Port, Guernsey GY5 7RU",
      phone: "01481 256517",
      mapsUrl: "https://maps.google.com/?q=L'Aumone+Surgery+Guernsey",
    },
    {
      name: "St Sampson's Surgery",
      address: "Grandes Masion Road, St Sampsons, Guernsey GY2 4JS",
      phone: "01481 245915",
      mapsUrl: "https://maps.google.com/?q=St+Sampson's+Surgery+Guernsey",
    },
    {
      name: "Town Doctors Surgery",
      address: "1 Le Truchot, St Peter Port, Guernsey GY1 1WD",
      phone: "01481 724717",
      mapsUrl: "https://maps.google.com/?q=Town+Doctors+Surgery+Guernsey",
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Logo */}
      <Image source={require("../assets/images/splash.png")} style={styles.logo} />

      <Text style={styles.title}>Find Us</Text>

      {locations.map((loc) => (
        <View key={loc.name} style={styles.card}>
          <Text style={styles.siteName}>{loc.name}</Text>
          <Text style={styles.address}>{loc.address}</Text>

          <TouchableOpacity onPress={() => Linking.openURL(`tel:${loc.phone}`)}>
            <Text style={styles.phone}>{loc.phone}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mapButton}
            onPress={() => Linking.openURL(loc.mapsUrl)}
          >
            <Text style={styles.mapButtonText}>Open in Google Maps</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Report fault */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Notice an issue?{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("/report-fault")}
          >
            Report app fault here
          </Text>
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
  card: {
    backgroundColor: "#F8FAFB",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#3CB5A3",
  },
  siteName: { fontSize: 20, fontWeight: "bold", color: "#1E355F" },
  address: { fontSize: 16, color: "#555", marginTop: 5 },
  phone: { fontSize: 16, color: "#1E90FF", marginTop: 8 },
  mapButton: {
    marginTop: 10,
    backgroundColor: "#1E355F",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  mapButtonText: { color: "#fff", fontSize: 16 },
  footer: { marginTop: 20, alignItems: "center" },
  footerText: { fontSize: 14, color: "#666", textAlign: "center" },
  link: { color: "#1E90FF", textDecorationLine: "underline" },
});
