import { useRouter } from "expo-router";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const patientName = "Mike";
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ Header Section */}
      <View style={styles.header}>
        <Image 
          source={require("../../assets/images/splash.png")}  
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={styles.greeting}>Welcome back, {patientName}</Text>
      </View>

      {/* ✅ Button Grid */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => router.push("/book")}>
          <Image 
            source={require("../../assets/images/book.png")} 
            style={styles.icon} 
            resizeMode="contain"
          />
          <Text style={styles.cardText}>Book Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/invoices")}>
          <Image 
            source={require("../../assets/images/invoices.png")} 
            style={styles.icon} 
            resizeMode="contain"
          />
          <Text style={styles.cardText}>Invoices</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/enquiries")}>
          <Image 
            source={require("../../assets/images/requests.png")} 
            style={styles.icon} 
            resizeMode="contain"
          />
          <Text style={styles.cardText}>Enquiries</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.card} onPress={() => router.push("/services/team")}>
          <Image 
            source={require("../../assets/images/messages.png")} // or a team icon if you have one
            style={styles.icon} 
            resizeMode="contain"
          />
          <Text style={styles.cardText}>Meet the Team</Text>
        </TouchableOpacity>

        <TouchableOpacity
  onPress={() => router.push("/notifications-test")}
  style={{ marginTop: 12, padding: 12, alignSelf: "center" }}
>
  <Text style={{ color: "#1E90FF", textDecorationLine: "underline" }}>
    Open Notifications Test
  </Text>
</TouchableOpacity>
      </View>

      {/* ✅ Report Fault Link */}
      <Text style={styles.reportLink}>
        Having issues?{" "}
        <Text style={styles.linkText} onPress={() => router.push("/report-fault")}>
          Report app fault here
        </Text>
        .
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F8FAFB", 
    paddingHorizontal: 20,
    paddingTop: 30
  },
  header: { 
    alignItems: "center", 
    marginBottom: 30 
  },
  logo: { 
    width: 150,   
    height: 150,
    marginBottom: 10 
  },
  greeting: { 
    fontSize: 26, 
    fontWeight: "bold", 
    color: "#1E355F" 
  },
  grid: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between" 
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#3CB5A3",
    width: "48%",
    height: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2
  },
  icon: {
    width: 65,
    height: 65,
    marginBottom: 8
  },
  cardText: { 
    fontSize: 18, 
    fontWeight: "600", 
    color: "#1E355F", 
    textAlign: "center"
  },
  reportLink: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 20,
    color: "#444"
  },
  linkText: {
    color: "#1E90FF",
    textDecorationLine: "underline"
  }
});
