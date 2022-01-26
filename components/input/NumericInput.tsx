import { useController, UseControllerProps } from 'react-hook-form';
import { Text, View } from '../Themed';
import { getInput, input } from '../../styles/input';
import useColorScheme from '../../hooks/useColorScheme';
import { TextInput } from 'react-native';

type Props<T> = {
  control: UseControllerProps<T>;
  label: string;
};
export const NumericInput = <T extends object>(props: Props<T>) => {
  const colorScheme = useColorScheme();
  const {
    field: { value, onChange, onBlur },
  } = useController(props.control);

  return (
    <View style={input.inputWrapper}>
      <Text>{props.label}</Text>
      <TextInput
        style={getInput(colorScheme)}
        onBlur={onBlur}
        onChangeText={(value) => onChange(Number(value))}
        value={String(value)}
        keyboardType="numeric"
      />
    </View>
  );
};
