import { StatusBar } from 'expo-status-bar';
import { Suspense } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from './components/Themed';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Suspense>
      </SafeAreaProvider>
    );
  }
}
