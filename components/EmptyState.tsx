import { ScrollView, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function EmptyState() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Ionicons
                name='airplane-outline' size={64}
                color={Colors.primary} 
            />
            <Text style={styles.title}>Brak podrozy</Text>
            <Text style={styles.subtitle}>Dodaj swoja pierwsza podroz!</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        height: 300
    },
    title: {
        color: Colors.textPrimary,
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        color: Colors.textSecondary,
        fontSize: 14
    }
})