import {StyleSheet} from 'react-native';

const getFormStyle = ({color, fontSize}: any) => {
  return StyleSheet.create({
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
    text_input_flat: {
      backgroundColor: color.foreground,
      paddingVertical: 15,
      paddingHorizontal: 20,
      fontSize: fontSize.size_md,
      borderTopWidth: 1,
      borderTopColor: color.border_list,
      borderBottomWidth: 1,
      borderBottomColor: color.border_list,
      color: color.content,
    },
  });
};

export default getFormStyle;
