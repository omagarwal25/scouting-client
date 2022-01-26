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

  const handleManual = () => {
    reset();
    navigation.navigate('Info');
  };

  return (
    <View style={container.container}>
      <Text style={styles.title}>Griffins Scout</Text>

      <Button label="Manual Entry" onPress={handleManual} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
