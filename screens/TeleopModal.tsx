import { useForm } from 'react-hook-form';

import { ScrollView, Text } from '../components/Themed';
import { zodResolver } from '@hookform/resolvers/zod';

import { teleopAtom } from '../state';
import { useAtom } from 'jotai';
import { container } from '../styles/container';

import { Teleop, teleopSchema } from '../models';
import { Topbar } from '../components/Topbar';
import { RootTabScreenProps } from '../types';
import { Button } from '../components/Button';
import { SwitchInput } from '../components/input/SwitchInput';
import { input } from '../styles/input';
import { IncrementInput } from '../components/input/IncrementInput';

export function TeleopModal({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [teleop, setTeleop] = useAtom(teleopAtom);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Teleop>({
    resolver: zodResolver(teleopSchema),
    defaultValues: teleop,
  });

  const onSubmit = handleSubmit((f) => {
    setTeleop(f);
    navigation.navigate('Endgame');
  });

  return (
    <>
      <Topbar />
      <ScrollView style={container.container}>
        <IncrementInput
          control={{ control, name: 'intakeFloor' }}
          label="Balls intaken from floor"
        />
        <Text style={input.errorText}>{errors.intakeFloor?.message}</Text>

        <IncrementInput
          control={{ control, name: 'intakeHuman' }}
          label="Balls intaken from human"
        />
        <Text style={input.errorText}>{errors.intakeHuman?.message}</Text>

        <IncrementInput
          control={{ control, name: 'missed' }}
          label="Goals missed"
        />
        <Text style={input.errorText}>{errors.missed?.message}</Text>

        <IncrementInput
          control={{ control, name: 'scoredHigh' }}
          label="High Goals"
        />
        <Text style={input.errorText}>{errors.scoredHigh?.message}</Text>

        <IncrementInput
          control={{ control, name: 'scoredLow' }}
          label="Low Goals"
        />
        <Text style={input.errorText}>{errors.scoredLow?.message}</Text>

        <SwitchInput
          control={{ control, name: 'penalties' }}
          label="Penalties?"
        />
        <Text style={input.errorText}>{errors.penalties?.message}</Text>

        <SwitchInput control={{ control, name: 'defense' }} label="Defense?" />
        <Text style={input.errorText}>{errors.defense?.message}</Text>

        <Button label="Next" onPress={onSubmit} />
      </ScrollView>
    </>
  );
}
