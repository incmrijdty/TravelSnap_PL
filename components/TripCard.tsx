import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RatingStars from './RatingStars';
import { Colors } from '@/constants/Colors';

import type { TripData } from '@/types/trip';

export interface TripCardProps extends TripData {
  onDelete?: () => void;
}

export default function TripCard({ title, destination, date, rating, onDelete }: TripCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name='location' size={20}
          color={Colors.accent} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.destination}>{destination}</Text>
        </View> 
      </View>

      <View style={styles.dateRow}>
        <Ionicons name='calendar' size={14}
          color={Colors.primary} />
        <Text style={styles.dateText}>{date}</Text>
      </View>
      
      <RatingStars rating={rating} />

      {onDelete &&  (
        <Pressable onPress={onDelete}>
          <Text style={{ color: Colors.accent, marginTop: 8, 
            fontWeight: 'bold' }}>Usun</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  destination: {
    color: Colors.textSecondary,
    marginTop: 2,
    fontSize: 13,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  dateText: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginLeft: 6,
  }
});