import { useAtom } from 'jotai';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import { resetGameAtom } from '../state';
import { container } from '../styles/container';
import { RootTabScreenProps } from '../types';
import { Button } from '../components/Button';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [_, reset] = useAtom(resetGameAtom);

  const handleManual = async () => {
    await reset();
    navigation.navigate('Info');
  };

  const handleQR = async () => {
    await reset();
    navigation.navigate('Scanner');
  };

  return (
    <View style={container.container}>
      <Text style={styles.title}>Griffins Scout</Text>

      <Button label="Manual Entry" onPress={handleManual} />
      <Button label="QR Entry" onPress={handleQR} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
