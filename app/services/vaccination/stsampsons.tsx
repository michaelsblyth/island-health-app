import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

export default function VaccinationStSampsons() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>St Sampson’s Vaccinations</Text>
        <Text style={styles.body}>Placeholder — add Covid/Flu buttons or booking links here later.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 20, paddingTop: 50 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  body: { fontSize: 18, color: "#333", textAlign: "center" }
});
