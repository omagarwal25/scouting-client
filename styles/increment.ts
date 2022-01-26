import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
export const increment = StyleSheet.create({
  incrementButton: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  darkIncrementButton: {
    borderColor: Colors['dark'].tint,
  },
  lightIncrementButton: {
    borderColor: Colors['light'].tint,
  },
});
