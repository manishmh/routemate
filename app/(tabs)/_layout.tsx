import Chat from "@/assets/tab-icons/Chat";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Chat color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="location" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" color={color} size={20} />
          ),
        }}
      />
    </Tabs>
  );
}
