import { Pressable, StyleSheet, Text, View } from 'react-native';

import RatingStars from './RatingStars';

export interface TripCardProps {
  title: string;
  destination: string;
  date: string;
  rating: number;
  onUsun?: () => void;
}

export default function TripCard({ title, destination, date, rating, onUsun }: TripCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.meta}>
        {destination} | {date}
      </Text>
      <RatingStars rating={rating} />
      {onUsun &&  (
        <Pressable onPress={onUsun}>
          <Text style={{ color: 'red', marginTop: 8, 
            fontWeight: 'bold' }}>Usun</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 32,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  meta: {
    fontSize: 14,
    color: '#888',
  },
});
