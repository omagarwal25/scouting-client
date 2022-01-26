import { useController, UseControllerProps } from 'react-hook-form';
import { Text, View } from '../Themed';
import { getPicker, getPickerItemStyle, input } from '../../styles/input';
import { Picker } from '@react-native-picker/picker';
import useColorScheme from '../../hooks/useColorScheme';

type Props<T> = {
  control: UseControllerProps<T>;
  label: string;
  items: { label: string; value: string }[];
};
export const PickerInput = <T extends object>(props: Props<T>) => {
  const colorScheme = useColorScheme();
  const {
    field: { value, onChange },
  } = useController(props.control);

  return (
    <View style={input.inputWrapper}>
      <Text>{props.label}</Text>
      <Picker
        style={getPicker(colorScheme)}
        selectedValue={value}
        itemStyle={getPickerItemStyle(colorScheme)}
        onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
      >
        {props.items.map((e) => (
          <Picker.Item label={e.label} value={e.value} key={e.value} />
        ))}
      </Picker>
    </View>
  );
};
