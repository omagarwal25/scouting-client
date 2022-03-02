import { useController, UseControllerProps } from 'react-hook-form';
import { Text, View } from '../Themed';
import { checkboxInput, input } from '../../styles/input';
import { Switch } from 'react-native';
import * as Haptics from 'expo-haptics';

type Props<T> = {
  control: UseControllerProps<T>;
  label: string;
};
export const SwitchInput = <T extends object>(props: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController(props.control);

  const onClick = async (value: boolean) => {
    onChange(value);
    await Haptics.selectionAsync();
  };

  return (
    <View style={input.inputWrapper}>
      <Text>{props.label}</Text>
      <Switch
        style={checkboxInput.input}
        onValueChange={(value) => onClick(value)}
        value={!!value}
      />
    </View>
  );
};
