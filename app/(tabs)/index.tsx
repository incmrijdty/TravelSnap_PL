import { useState } from 'react';
import { ScrollView, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import AddTripForm from '@/components/AddTripForm'; //works on this screen
import TripCard from '@/components/TripCard';
import ScreenHeader from '@/components/ScreenHeader';
import EmptyState from '@/components/ui/EmptyState';
import TripStats from '@/components/TripStats';
import { Colors } from '@/constants/Colors';
import type { Trip, TripData } from '@/types/trip';

export default function HomeScreen() {
  const [trips, setTrips] = useState<Trip[]>([]);

  const router = useRouter();

  const handleAddTrip = (data: TripData): void => {
    const newTrip: Trip = { id: Date.now().toString(), ...data };
    setTrips([newTrip, ...trips]);
  };

  const handleDeleteTrip = (id: string): void => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenHeader tripCount={trips.length} />
      <ScrollView contentContainerStyle={styles.content} style={styles.container}>
        <TripStats trips={trips} />
        <AddTripForm onAdd={handleAddTrip} /> 

        {trips.length === 0 ? (
          <EmptyState
            icon="airplane-outline"
            title="Brak podróży"
            subtitle="Dodaj swoją pierwszą podróż!"
          />
        ) : (
          trips.map((trip) => (
            <Link
              key={trip.id}
              href={{
                pathname: '/trip/[id]',
                params: {
                  id: trip.id,
                  title: trip.title,
                  destination: trip.destination,
                  date: trip.date,
                  rating: String(trip.rating)
                },
              }}
              asChild
            >
              <Pressable>
                <TripCard
                  key={trip.id}
                  title={trip.title}
                  destination={trip.destination}
                  date={trip.date}
                  rating={trip.rating}
                  onDelete={() => handleDeleteTrip(trip.id)}
                />
              </Pressable>
            </Link>
            
          ))
        )}
        <Pressable //not saving them to the list
          style={styles.fab}
          onPress={() => router.push('/add-trip')}
        >
          <Ionicons
            name="add"
            size={28}
            color={Colors.dark.background}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  content: {
    padding: 16,
  },
  fab: {
    width: 64,
    height: 64,
    borderRadius: 9999,
    backgroundColor: Colors.dark.tint,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 16,
    marginBottom: 32,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  }
});
