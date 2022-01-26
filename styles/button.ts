import { StyleSheet, ColorSchemeName } from 'react-native';
import Colors from '../constants/Colors';

export const button = StyleSheet.create({
  btnText: {
    color: 'white',
  },
  darkButton: {
    backgroundColor: Colors['dark'].tint,
  },
  lightButton: {
    backgroundColor: Colors['light'].tint,
  },
  button: {
    // marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
});

export const getButton = (mode: 'dark' | 'light', pressed: boolean) => [
  mode === 'dark' ? button.darkButton : button.lightButton,
  button.button,
  { opacity: pressed ? 0.5 : 1 },
];
