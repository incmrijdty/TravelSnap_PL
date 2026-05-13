import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import AddTripForm from '@/components/AddTripForm';
import { Colors } from '@/constants/Colors';

import type { TripData } from '@/types/trip';

export default function AddTripScreen() {
  const router = useRouter();

  const handleAddTrip = (data: TripData) => {
    console.log('NEW TRIP:', data);

    // later:
    // save to global state / storage

    router.back();
  };

  return (
    <View style={styles.container}>
      <AddTripForm onAdd={handleAddTrip} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 16,
  },
});