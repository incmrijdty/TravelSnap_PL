import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import RatingStars from "@/components/RatingStars"

export default function TripDetail() {
    const router = useRouter();
    const [isFavourite, setIsFavourite] = useState(false);

    const { id, title, destination, date, rating } =
        useLocalSearchParams<{
            id: string;
            title: string;
            destination: string;
            date: string;
            rating: string;
        }>();

    return (
        <>
            <Stack.Screen options={{ title: title || "Trip",
                headerStyle: {
                    backgroundColor: Colors.dark.background
                },
                headerTintColor: Colors.dark.tint,

                headerRight: () => (
                    <Pressable
                        onPress={() => 
                            setIsFavourite(!isFavourite)
                        }
                    >
                        <Ionicons
                            name={
                                isFavourite 
                                    ? 'heart'
                                    : 'heart-outline'
                            }
                            size={24}
                            color={
                                isFavourite 
                                    ? Colors.dark.accent
                                    : Colors.dark.textSecondary
                            }
                        />
                    </Pressable>
                )
             }} 
            />

            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>

                <View style={styles.row}>
                    <Ionicons
                        name="location"
                        size={16}
                        color={Colors.dark.textSecondary}
                    />

                    <Text style={styles.meta}>
                        {destination}
                    </Text>
                </View>

                <View style={styles.row}>
                    <Ionicons
                        name="calendar"
                        size={14}
                        color={Colors.dark.textSecondary}
                    />

                    <Text style={styles.meta}>
                        {date}
                    </Text>
                </View>

                <RatingStars rating={Number(rating)} />

                <Pressable
                    style={styles.button}
                    onPress={() => router.back()}
                >
                    <Text style={styles.buttonText}>
                        Powrót do listy
                    </Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 16,
    gap: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  meta: {
    fontSize: 14,
    color: Colors.dark.textSecondary,
  },

  button: {
    backgroundColor: Colors.dark.tint,
    padding: 12,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    color: Colors.dark.background,
  }
});