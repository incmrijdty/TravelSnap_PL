import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function Explore() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Discover new places</Text>
            <Text style={styles.subtitle}>Coming soon...</Text>
            <Ionicons name="compass" size={64} color='#00FFFF' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark.background, 
        gap: 12,
        padding: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.dark.text,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.dark.textSecondary,
        marginTop: 2,
    }
})