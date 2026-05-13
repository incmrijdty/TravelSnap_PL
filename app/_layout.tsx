import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors.dark.background
      },
      headerTintColor: Colors.dark.text,
      contentStyle: { 
        backgroundColor: Colors.dark.background
      },
    }}>
      <Stack.Screen name='(tabs)'
        options={{ headerShown: false }} />
      <Stack.Screen name='trip/[id]'
        options={{ title: 'Trip Details',
          animation: 'slide_from_right'
        }} />
      <Stack.Screen name='add-trip'
        options={{ presentation: 'modal'}} />
    </Stack>   
  );
}
