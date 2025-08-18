import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // ✅ After 5 seconds, move to the dashboard tabs
      router.replace("/(tabs)");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash.png")} // ✅ make sure path is correct
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 250,
    height: 250,
  },
});
