import { View, Text } from '../components/Themed';

// import BarcodeCreatorViewManager, {
//   BarcodeFormat,
// } from 'react-native-barcode-creator';
import { gameAtom } from '../state';
import QRCode from 'react-native-qrcode-svg';
import { useAtom } from 'jotai';
import { container } from '../styles/container';
import layout from '../constants/Layout';
import { Topbar } from '../components/Topbar';
import { RootTabScreenProps } from '../types';

import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { compress } from 'compress-json';
import { compress as strComp } from 'lz-string';
import { encode } from '../utils/csv';

export function QRCodeModal({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [game, _] = useAtom(gameAtom);
  const colorScheme = useColorScheme();

  return (
    <>
      <Topbar />
      <View style={container.container}>
        <QRCode
          value={encode(game)}
          // value={''}
          size={layout.window.width * 0.9}
          ecl="L"
          {...(colorScheme === 'dark'
            ? { color: Colors['dark'].tint, backgroundColor: 'black' }
            : { color: Colors['light'].tint })}
        />

        {/* <BarcodeCreatorViewManager
          value={'100'}
          background={'#000000'}
          foregroundColor={'#FFFFFF'}
          format={BarcodeFormat.QR}
          style={{ flex: 0 }}
        /> */}
        {/* <Text>
          {game.auto.intakeFloor *
            (game.endgame.climbHeight === 'traversal' ? 1 : 0)}
        </Text> */}
      </View>
    </>
  );
}
