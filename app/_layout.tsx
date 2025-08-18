import * as Notifications from "expo-notifications";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack 
        screenOptions={{ headerShown: false }}
        initialRouteName="other/splash"   // ✅ Force Splash first
      >
        {/* ✅ Splash shows first */}
        <Stack.Screen name="other/splash" />

        {/* ✅ Tabs are hidden until splash calls router.replace */}
        <Stack.Screen name="(tabs)" />

        {/* ✅ Oops handler */}
        <Stack.Screen name="other/+not-found" options={{ title: 'Oops!' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
