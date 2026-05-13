import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>AS</Text>
            </View>
            <Text style={styles.imie}>Alesia Sichova</Text>
            <Text style={styles.joined}>Joined March 2026</Text>
            <View style={styles.stats}>
                <View style={styles.card}>
                    <Text style={styles.value}>5</Text>
                    <Text style={styles.label}>Trips</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.value}>5</Text>
                    <Text style={styles.label}>Countries</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.value}>4.5</Text>
                    <Text style={styles.label}>Rating</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark.background,
        padding: 16
    },
    imie: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.dark.text
    },
    joined: {
        fontSize: 14,
        color: Colors.dark.textSecondary,
        marginTop: 2,
        marginBottom: 24
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 9999,
        backgroundColor: Colors.dark.tint,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    avatarText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.dark.background,
    },
    stats: {
        flexDirection: 'row',
        gap: 12,
        width: '100%'
    },
    card: {
        flex: 1,
        backgroundColor: Colors.dark.card,
        padding: 16,
        borderRadius: 16,
        alignItems: 'center'
    },
    value: {
        fontSize: 20,
        color: Colors.dark.text,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 12,
        color: Colors.dark.textSecondary,
        marginTop: 4
    }
})