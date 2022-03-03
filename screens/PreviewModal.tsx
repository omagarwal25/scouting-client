import { View, Text, ScrollView } from '../components/Themed';

// import { gameAtom, saveGameAtom } from '../state';
import { useAtom } from 'jotai';
import { container } from '../styles/container';
import { Topbar } from '../components/Topbar';
import { RootTabScreenProps } from '../types';
import { Button } from '../components/Button';
import { gameAtom } from '../state';

export function PreviewModal({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [game] = useAtom(gameAtom);

  // const [_, saveGame] = useAtom(saveGameAtom);

  return (
    <>
      <Topbar />
      <ScrollView style={container.container}>
        <Text>{JSON.stringify(game)}</Text>
        <Button
          onPress={async () => {
            navigation.navigate('QR');
          }}
          label="Confirm"
        ></Button>
      </ScrollView>
    </>
  );
}
