import { useController, UseControllerProps } from 'react-hook-form';
import { Text, View } from '../Themed';
import { getInput, input } from '../../styles/input';
import useColorScheme from '../../hooks/useColorScheme';
import { Switch } from 'react-native';

type Props<T> = {
  control: UseControllerProps<T>;
  label: string;
};
export const SwitchInput = <T extends object>(props: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController(props.control);

  return (
    <View style={input.inputWrapper}>
      <Text>{props.label}</Text>
      <Switch
        style={input.input}
        onValueChange={(value) => onChange(value)}
        value={!!value}
      />
    </View>
  );
};
