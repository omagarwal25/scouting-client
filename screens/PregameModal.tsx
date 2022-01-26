import { useForm } from 'react-hook-form';

import { Text, View } from '../components/Themed';
import { zodResolver } from '@hookform/resolvers/zod';

import { pregameAtom } from '../state';
import { useAtom } from 'jotai';
import { input } from '../styles/input';
import { container } from '../styles/container';

import { NumericInput } from '../components/input/NumericInput';
import { Pregame, pregameSchema } from '../models';
import { Topbar } from '../components/Topbar';
import { RootTabScreenProps } from '../types';
import { Button } from '../components/Button';
import { SwitchInput } from '../components/input/SwitchInput';

export function PregameModal({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [pregame, setPregame] = useAtom(pregameAtom);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Pregame>({
    resolver: zodResolver(pregameSchema),
    defaultValues: pregame,
  });

  const onSubmit = handleSubmit((f) => {
    setPregame(f);
    navigation.navigate('Auto');
  });

  return (
    <>
      <Topbar />
      <View style={container.container}>
        <SwitchInput
          control={{ control, name: 'preloadedBalls' }}
          label="Preloaded Ball?"
        />
        <Text style={input.errorText}>{errors.preloadedBalls?.message}</Text>

        <Button label="Next" onPress={onSubmit} />
      </View>
    </>
  );
}
