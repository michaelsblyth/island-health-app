import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1E355F',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#3CB5A3',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          switch (route.name) {
            case 'index':
              iconName = 'home';
              break;
            case 'book':
              iconName = 'calendar';
              break;
            case 'invoices':
              iconName = 'document-text';
              break;
            case 'team':
              iconName = 'chatbox';
              break;
            case 'enquiries':
              iconName = 'clipboard';
              break;
            case "find-us":
              iconName = "map" 
              break; 
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="book" options={{ title: 'Book' }} />
      <Tabs.Screen name="invoices" options={{ title: 'Invoices' }} />
      <Tabs.Screen name="team" options={{ title: 'Meet The Team' }} />
      <Tabs.Screen name="enquiries" options={{ title: 'Enquiries' }} />
      <Tabs.Screen name="find-us" options={{ title: 'Find Us' }} />
    </Tabs>
  );
}