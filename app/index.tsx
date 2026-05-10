import { useState } from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AddTripForm from '@/components/AddTripForm';
import TripCard from '@/components/TripCard';
import ScreenHeader from '@/components/ScreenHeader';
import EmptyState from '@/components/EmptyState';
import TripStats from '@/components/TripStats';

import type { Trip, TripData } from '@/types/trip';

import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  const [trips, setTrips] = useState<Trip[]>([]);

  const handleAddTrip = (data: TripData): void => {
    const newTrip: Trip = { id: Date.now().toString(), ...data };
    setTrips([newTrip, ...trips]);
  };

  const handleDeleteTrip = (id: string): void => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  const averageRating = trips.length > 0
    ? (
        trips.reduce((sum, trip) => sum + trip.rating, 0) / 
        trips.length
    ).toFixed(1)
    : '0.0';

  const countriesCount = new Set(
    trips.map((trip) => trip.destination)
  ).size;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ScrollView contentContainerStyle={styles.content} style={styles.container}>
        <ScreenHeader tripCount={trips.length} />

        <TripStats
           tripsCount={trips.length}
           averageRating={averageRating}
           countriesCount={countriesCount}
        />

        <AddTripForm onAdd={handleAddTrip} />

        {trips.length === 0 
          ? <EmptyState />
          : trips.map((trip) => (
            <TripCard
              key={trip.id}
              {...trip}
              onDelete={() => handleDeleteTrip(trip.id)}
            />
          ))
        }
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
  },
  countText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    marginLeft: 4,
  },
});
