import { useForm } from 'react-hook-form';

import { ScrollView, Text, View } from '../components/Themed';
import { zodResolver } from '@hookform/resolvers/zod';

import { GameInfo, gameInfoSchema } from '../models/gameInfo';
import { gameInfoAtom } from '../state';
import { useAtom } from 'jotai';
import { input } from '../styles/input';
import { container } from '../styles/container';
import { PickerInput } from '../components/input/PickerInput';
import { NumericInput } from '../components/input/NumericInput';
import { RootTabScreenProps } from '../types';
import { Button } from '../components/Button';

export default function InfoModal({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [gameInfo, setGameInfo] = useAtom(gameInfoAtom);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GameInfo>({
    resolver: zodResolver(gameInfoSchema),
    defaultValues: gameInfo,
  });

  const onSubmit = handleSubmit((f) => {
    setGameInfo(f);
    navigation.navigate('Pregame');
  });

  return (
    <ScrollView style={container.container}>
      {/* <View style={input}> */}
      <NumericInput control={{ control, name: 'scoutId' }} label="Scout ID" />
      <Text style={input.errorText}>{errors.scoutId?.message}</Text>
      {/* </View> */}
      <NumericInput
        control={{ control, name: 'matchNumber' }}
        label="Match Number"
      />
      <Text style={input.errorText}>{errors.matchNumber?.message}</Text>
      <PickerInput
        label="Match Type"
        items={[
          { label: 'Practice', value: 'practice' },
          { label: 'Qualifier', value: 'qualifier' },
          { label: 'Playoff', value: 'playoff' },
        ]}
        control={{ control, name: 'matchType' }}
      />
      <Text style={input.errorText}>{errors.matchType?.message}</Text>
      <NumericInput
        control={{ control, name: 'teamNumber' }}
        label="Team Number"
      />
      <Text style={input.errorText}>{errors.teamNumber?.message}</Text>
      <PickerInput
        control={{ control, name: 'teamColor' }}
        label="Team Color"
        items={[
          { label: 'Blue', value: 'blue' },
          { label: 'Red', value: 'red' },
        ]}
      />
      <Text style={input.errorText}>{errors.teamColor?.message}</Text>
      {/** Submit Button */}
      <Button label="Next" onPress={onSubmit} />
    </ScrollView>
  );
}
