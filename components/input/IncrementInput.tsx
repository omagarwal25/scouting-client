import { useController, UseControllerProps } from 'react-hook-form';
import { Text, View } from '../Themed';
import { getInput, input } from '../../styles/input';
import useColorScheme from '../../hooks/useColorScheme';
import { Pressable, TextInput } from 'react-native';
import { Button } from '../Button';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { increment } from '../../styles/increment';

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
          padding: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 0,
          marginLeft: 'auto',
        }}
      >
        <Pressable
          onPress={() => onChange(Number(value) + 1)}
          style={[incrementBtn]}
        >
          <FontAwesome color={Colors[colorScheme].tint} name="plus" />
        </Pressable>
        <Pressable
          onPress={() => onChange(Number(value) - 1)}
          style={[incrementBtn, { marginLeft: 10 }]}
        >
          <FontAwesome name="minus" color={Colors[colorScheme].tint} />
        </Pressable>
      </View>
    </View>
  );
};
