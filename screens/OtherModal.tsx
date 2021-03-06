import { useForm } from 'react-hook-form';

import { ScrollView, Text } from '../components/Themed';
import { zodResolver } from '@hookform/resolvers/zod';

import { otherAtom } from '../state';
import { useAtom } from 'jotai';
import { input } from '../styles/input';
import { container } from '../styles/container';

import { Other, otherSchema } from '../models';
import { Topbar } from '../components/Topbar';
import { RootTabScreenProps } from '../types';
import { Button } from '../components/Button';
import { TextInput } from '../components/input/TextInput';
import { NumericInput } from '../components/input/NumericInput';

export function OtherModal({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [other, setOther] = useAtom(otherAtom);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Other>({
    resolver: zodResolver(otherSchema),
    defaultValues: other,
  });

  const onSubmit = handleSubmit((f) => {
    setOther(f);
    navigation.navigate('Preview');
  });

  return (
    <>
      <Topbar />
      <ScrollView style={container.container}>
        <NumericInput control={{ control, name: 'rank' }} label="Rank (1-10)" />
        <Text style={input.errorText}>{errors.rank?.message}</Text>

        <TextInput
          control={{ control, name: 'scoutInitials' }}
          label="Your Initials"
        />
        <Text style={input.errorText}>{errors.scoutInitials?.message}</Text>

        <Button label="Next" onPress={onSubmit} />
      </ScrollView>
    </>
  );
}
