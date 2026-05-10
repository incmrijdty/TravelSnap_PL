import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";


interface TripStatsProps  {
    tripsCount: number;
    averageRating: string;
    countriesCount: number;
}


export default function TripStats({ tripsCount, averageRating, countriesCount } : TripStatsProps) {
    return (
        <View style={styles.stats}>
            <View style={styles.card}>
                <Text style={styles.label}>Podroze: {tripsCount}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>Sr. ocena: {averageRating}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>Kraje: {countriesCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    stats: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 16
    },
    card: {
        flex: 1,
        backgroundColor: Colors.card,
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.textPrimary
    }
})