import { useRouter } from "expo-router";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TEAM_LAUMONE } from "../../_data/team";
import TeamCard from "../../components/TeamCard";

export default function TeamLaumone() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={require("../../../assets/images/splash.png")} style={styles.logo} />
        <Text style={styles.title}>L’Aumone Team</Text>

        <View style={{ marginTop: 8 }}>
          {TEAM_LAUMONE.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </View>

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
  logo: { width: 250, height: 60, resizeMode: "contain", alignSelf: "center", marginBottom: 10 },
  title: { fontSize: 26, fontWeight: "800", color: "#1E355F", textAlign: "center", marginBottom: 12 },
  reportLink: { fontSize: 14, color: "#1E90FF", textAlign: "center", marginTop: 24, textDecorationLine: "underline" },
});

