import { useController, UseControllerProps } from 'react-hook-form';
import { Text, View } from '../Themed';
import { getInput, input } from '../../styles/input';
import useColorScheme from '../../hooks/useColorScheme';
import { Pressable, TextInput } from 'react-native';
import { Button } from '../Button';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { increment } from '../../styles/increment';
import * as Haptic from 'expo-haptics';

type Props<T> = {
  control: UseControllerProps<T>;
  label: string;
};
export const IncrementInput = <T extends object>(props: Props<T>) => {
  const colorScheme = useColorScheme();
  const {
    field: { value, onChange, onBlur },
  } = useController(props.control);

  const incrementBtn = [
    increment.incrementButton,
    colorScheme === 'dark'
      ? increment.darkIncrementButton
      : increment.lightIncrementButton,
  ];

  const onIncrement = async () => {
    onChange(Number(value) + 1);
    await Haptic.selectionAsync();
  };

  const onDecrement = async () => {
    onChange(Number(value) - 1);
    await Haptic.selectionAsync();
  };

  return (
    <View style={input.inputWrapper}>
      <Text style={{ flexGrow: 1 }}>
        {props.label}: {value}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 45,
          maxWidth: '20%',
          padding: 2,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 0,
          marginLeft: 'auto',
        }}
      >
        <Pressable onPress={onIncrement} style={[incrementBtn]}>
          <FontAwesome color={Colors[colorScheme].tint} name="plus" />
        </Pressable>
        <Pressable
          onPress={onDecrement}
          style={[incrementBtn, { marginLeft: 10 }]}
        >
          <FontAwesome name="minus" color={Colors[colorScheme].tint} />
        </Pressable>
      </View>
    </View>
  );
};
