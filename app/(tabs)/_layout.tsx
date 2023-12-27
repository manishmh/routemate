import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import Chat from "../../assets/tab-icons/Chat";
import Serach from "../../assets/tab-icons/Serach";
import Location from "../../assets/tab-icons/Location";
import Groups from "../../assets/tab-icons/Groups";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="chat"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Chat color={ color }/> 
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Serach color={ color }/>
          ),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Location color={ color }/>
          ),
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Groups color={ color }/>
          ),
        }}
      />
    </Tabs>
  );
}
