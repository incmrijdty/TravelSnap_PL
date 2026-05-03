import { Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import TripCard from '@/components/TripCard';

interface Trip {
  id: string;
  title: string;
  destination: string;
  date: string;
  rating: number;
}

export default function HomeScreen() {
  const [title, setTitle] = useState('');
  const [destination, setDest] = useState('');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState('');
  const [trips, setTrips] = useState<Trip[]>([]);

  const handleAddTrip = (): void => {
    if (!title.trim() || !destination.trim()|| !date.trim() || !rating.trim()) {
      alert("Wszystkie sa wymagane");
      return;
    } 

    const ratingNumber = Number(rating);

    if (isNaN(ratingNumber) || ratingNumber < 1 || ratingNumber > 5) {
      alert("Ocena musze byc liczba od 1 do 5");
      return;
    }

    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])$/;

    if (!dateRegex.test(date.trim())) {
      alert ("Data musi byc w formacie YYYY-MM");
      return;
    }

    const newTrip: Trip = {
      id: Date.now().toString(),
      title: title.trim(),
      destination: destination.trim(),
      date: date.trim(),
      rating: ratingNumber,
    };

    setTrips([...trips, newTrip]);
    setTitle('');
    setDest('');
    setDate('');
    setRating('');
  };

  const handleUsun = (id: string) => {
    setTrips(trips.filter(trip => trip.id !== id))
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>TravelSnap</Text>

      <TextInput
        style={styles.input}
        placeholder='Tytul podrozy...'
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder='Destynacja...'
        value={destination}
        onChangeText={setDest}
      />
      <TextInput
        style={styles.input}
        placeholder='Data (e.g. 2024-07)...'
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder='Ocena (1-5)...'
        value={rating}
        onChangeText={setRating}
        keyboardType='numeric'
      />
      
      <Pressable style={styles.addBtn}
        onPress={handleAddTrip}>
        <Text style={styles.addText}>+ Dodaj podroz</Text>  
      </Pressable>

      <Text style={styles.sum}>Liczba ukonczonych podrozy: {trips.length}</Text>

      {trips.map((trip) => (
        <TripCard 
          key={trip.id}
          title={trip.title}
          destination={trip.destination}
          date={trip.date}
          rating={trip.rating} 
          onUsun={() => handleUsun(trip.id)}
        />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 24,
    backgroundColor: '#F0F4F8'
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 4
  },
  sum: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 4
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 8
  },
  addBtn: {
    backgroundColor: '#61DAFB',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16
  },
  addText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A1628'
  }
}); 