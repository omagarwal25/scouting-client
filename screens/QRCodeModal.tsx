import { View, Text } from '../components/Themed';

// import { gameAtom, saveGameAtom } from '../state';
import QRCode from 'react-native-qrcode-svg';
import { useAtom } from 'jotai';
import { container } from '../styles/container';
import layout from '../constants/Layout';
import { Topbar } from '../components/Topbar';
import { RootTabScreenProps } from '../types';

import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { encode } from '../utils/csv';
import { Pressable } from 'react-native';
import { button, getButton } from '../styles/button';
import { gameAtom } from '../state';

export function QRCodeModal({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [game] = useAtom(gameAtom);
  const colorScheme = useColorScheme();
  // const [_, saveGame] = useAtom(saveGameAtom);

  return (
    <>
      <Topbar />
      <View style={container.container}>
        <QRCode
          value={encode(game)}
          size={layout.window.width * 0.9}
          ecl="L"
          {...(colorScheme === 'dark'
            ? { color: Colors['dark'].tint, backgroundColor: 'black' }
            : { color: Colors['light'].tint })}
        />

        <Pressable
          onPress={async () => {
            // await saveGame();
            navigation.navigate('TabOne');
          }}
          style={({ pressed }) => [
            getButton(colorScheme, pressed),
            { margin: 10 },
          ]}
        >
          <Text style={button.btnText}>Go Home!</Text>
        </Pressable>
      </View>
    </>
  );
}
