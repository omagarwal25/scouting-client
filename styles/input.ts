import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export const input = StyleSheet.create({
  inputWrapper: {
    marginTop: 2,
    padding: 5,
    minWidth: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 'auto',
  },

  errorText: {
    color: Colors['dark'].tint,
  },

  darkInput: {
    borderColor: Colors['dark'].tint,
    color: 'white',
  },

  lightInput: {
    borderColor: Colors['light'].tint,
  },
  picker: {
    width: '50%',
    borderRadius: 4,
    marginRight: 0,
    marginLeft: 'auto',
    borderWidth: 1,
  },

  darkText: {
    color: 'white',
  },

  lightText: {
    color: 'black',
  },

  input: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginRight: 0,
    marginLeft: 'auto',
  },
});

export const getInput = (theme: 'light' | 'dark') => [
  theme === 'light' ? input.lightInput : input.darkInput,
  input.input,
];

export const getPicker = (theme: 'light' | 'dark') => [
  theme === 'dark' ? input.darkInput : input.lightInput,
  input.picker,
];

export const getPickerItemStyle = (theme: 'light' | 'dark') =>
  theme === 'dark' ? input.darkText : input.lightText;
