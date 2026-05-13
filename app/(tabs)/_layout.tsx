import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: Colors.dark.tint,
            tabBarInactiveTintColor: Colors.light.inactiveTint,
            tabBarStyle: {
                backgroundColor: Colors.dark.background,
                borderTopWidth: 0
            },
            headerShown: false,
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home' color={color} size={size} />
                    ),
                }}
            />
            
            <Tabs.Screen
                name='explore'
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='compass-outline' color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='person' color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    )
}