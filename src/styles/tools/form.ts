import {StyleSheet} from 'react-native';
import {color, fontSize} from '../config';

const formStyles = StyleSheet.create({
  text_input: {
    borderRadius: 24,
    fontSize: fontSize.size_md,
    lineHeight: 20,
    borderWidth: 1,
    borderColor: color.border_input,
    paddingVertical: 12,
    paddingHorizontal: 18,
    color: color.content,
  },
});

export default formStyles;
