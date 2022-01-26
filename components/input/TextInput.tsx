import { useController, UseControllerProps } from 'react-hook-form';
import { Text, View } from '../Themed';
import { getInput, input } from '../../styles/input';
import useColorScheme from '../../hooks/useColorScheme';
import { TextInput as RInput } from 'react-native';

type Props<T> = {
  control: UseControllerProps<T>;
  label: string;
};
export const TextInput = <T extends object>(props: Props<T>) => {
  const colorScheme = useColorScheme();
  const {
    field: { value, onChange, onBlur },
  } = useController(props.control);

  return (
    <View style={input.inputWrapper}>
      <Text>{props.label}</Text>
      <RInput
        style={getInput(colorScheme)}
        onBlur={onBlur}
        onChangeText={(value) => onChange(value)}
        value={String(value)}
      />
    </View>
  );
};
