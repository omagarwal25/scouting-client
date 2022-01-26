import { FC } from 'react';
import { PressableProps, Pressable } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import { button, getButton } from '../styles/button';
import { TextProps, Text } from './Themed';

type Props = {
  text?: Omit<TextProps, 'style'>;
  label?: string;
} & Omit<PressableProps, 'style'>;

export const Button: FC<Props> = (props) => {
  const colorScheme = useColorScheme();

  const { text, label, children, ...pressableProps } = props;
  return (
    <Pressable
      style={({ pressed }) => getButton(colorScheme, pressed)}
      {...pressableProps}
    >
      {children || (
        <Text style={button.btnText} {...text}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};
