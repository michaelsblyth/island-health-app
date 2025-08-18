import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function InAppBrowser() {
  const { url } = useLocalSearchParams();

  if (typeof url !== "string") return null;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});