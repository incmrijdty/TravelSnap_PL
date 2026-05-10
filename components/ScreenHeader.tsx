import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface ScreenHeaderProps {
    tripCount: number;
}

export default function ScreenHeader({ tripCount }: ScreenHeaderProps ) {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>TravelSnap</Text>
                <Text style ={styles.subtitle}>Twoj dziennik podrozy</Text>
            </View>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{tripCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.background,
        paddingTop: 20,
        paddingHorizontal: 16,
        paddingBottom: 12 //moje
    },
    badge: {
        backgroundColor: Colors.accent,
        borderRadius: 5

    }, 
    badgeText: {
        color: Colors.textPrimary
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        paddingBottom: 3 //moje
    },
    subtitle: {
        fontSize: 12,
        color: Colors.textSecondary
    }
})