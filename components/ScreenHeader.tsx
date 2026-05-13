import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/Colors';

interface ScreenHeaderProps {
  tripCount: number;
}

export default function ScreenHeader({ tripCount }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>TravelSnap</Text>
        <Text style={styles.subtitle}>Twój dziennik podróży</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{tripCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.dark.textSecondary,
    marginTop: 2,
  },
  badge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.dark.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: Colors.dark.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
