import { View, ScrollView } from '../components/Themed';

// import { gameAtom, saveGameAtom } from '../state';
import QRCode from 'react-native-qrcode-svg';
import { useAtom } from 'jotai';
import { container } from '../styles/container';
import layout from '../constants/Layout';
import { Topbar } from '../components/Topbar';
import { RootTabScreenProps } from '../types';
import { Button } from '../components/Button';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { encode } from '../utils/csv';
import { gameAtom } from '../state';
import { Alert } from 'react-native';

export function QRCodeModal({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [game] = useAtom(gameAtom);
  const colorScheme = useColorScheme();
  // const [_, saveGame] = useAtom(saveGameAtom);

  const createAlert = () =>
    Alert.alert(
      'Confirm Back?',
      'By going back, your data for this match will be lost.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          style: 'destructive',
          onPress: () => navigation.navigate('TabOne'),
        },
      ]
    );

  return (
    <>
      <Topbar />
      <ScrollView style={container.container}>
        <QRCode
          value={encode(game)}
          // value={JSON.stringify(game.gameInfo)}
          size={layout.window.width * 0.9}
          ecl="L"
          {...(colorScheme === 'dark'
            ? { color: Colors['dark'].tint, backgroundColor: 'black' }
            : { color: Colors['light'].tint })}
        />

        <View style={{ padding: 2 }} />

        <Button onPress={() => createAlert()} label="Go Home!"></Button>
      </ScrollView>
    </>
  );
}
