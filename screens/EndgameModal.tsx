import { useForm } from 'react-hook-form';

import { Text, View } from '../components/Themed';
import { zodResolver } from '@hookform/resolvers/zod';

import { endgameAtom } from '../state';
import { useAtom } from 'jotai';
import { input } from '../styles/input';
import { container } from '../styles/container';

import { Endgame, endgameSchema } from '../models';
import { Topbar } from '../components/Topbar';
import { RootTabScreenProps } from '../types';
import { Button } from '../components/Button';
import { SwitchInput } from '../components/input/SwitchInput';
import { PickerInput } from '../components/input/PickerInput';

export function EndgameModal({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [endgame, setEndgame] = useAtom(endgameAtom);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Endgame>({
    resolver: zodResolver(endgameSchema),
    defaultValues: endgame,
  });

  const onSubmit = handleSubmit((f) => {
    setEndgame(f);
    navigation.navigate('Other');
  });

  return (
    <>
      <Topbar />
      <View style={container.container}>
        <PickerInput
          control={{ control, name: 'climbHeight' }}
          label="Climb Height"
          items={[
            { label: 'No Climb', value: 'none' },
            { label: 'Low Rung', value: 'low' },
            { label: 'Middle Rung', value: 'middle' },
            { label: 'High Rung', value: 'high' },
            { label: 'Traversal Rung', value: 'traversal' },
          ]}
        />
        <Text style={input.errorText}>{errors.climbHeight?.message}</Text>

        <SwitchInput
          control={{ control, name: 'climbSuccess' }}
          label="Climb Success?"
        />
        <Text style={input.errorText}>{errors.climbSuccess?.message}</Text>

        <Button label="Next" onPress={onSubmit} />
      </View>
    </>
  );
}
