import { useForm } from 'react-hook-form';

import { Text, ScrollView } from '../components/Themed';
import { zodResolver } from '@hookform/resolvers/zod';

import { autoAtom } from '../state';
import { useAtom } from 'jotai';
import { container } from '../styles/container';

import { Auto, autoSchema } from '../models';
import { Topbar } from '../components/Topbar';
import { RootTabScreenProps } from '../types';
import { Button } from '../components/Button';
import { SwitchInput } from '../components/input/SwitchInput';
import { input } from '../styles/input';
import { IncrementInput } from '../components/input/IncrementInput';

export function AutoModal({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [auto, setAuto] = useAtom(autoAtom);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Auto>({
    resolver: zodResolver(autoSchema),
    defaultValues: auto,
  });

  const onSubmit = handleSubmit((f) => {
    setAuto(f);
    navigation.navigate('Teleop');
  });

  return (
    <>
      <Topbar />
      <ScrollView style={container.container}>
        <IncrementInput
          control={{ control, name: 'humanPlayerHigh' }}
          label="Human Player High Goals"
        />
        <Text style={input.errorText}>{errors.humanPlayerHigh?.message}</Text>

        <IncrementInput
          control={{ control, name: 'humanPlayerLow' }}
          label="Human Player Low Goals"
        />
        <Text style={input.errorText}>{errors.humanPlayerLow?.message}</Text>

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
          control={{ control, name: 'apron' }}
          label="Exited Apron?"
        />
        <Text style={input.errorText}>{errors.apron?.message}</Text>

        <Button label="Next" onPress={onSubmit} />
      </ScrollView>
    </>
  );
}
