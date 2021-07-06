import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@/hooks';

interface IProps {
  bordered?: boolean;
  text: string;
  icon: any;
  handlePress: () => void;
}

const HomeActionItem = (props: IProps) => {
  const {styles} = useTheme();
  const {text, handlePress, icon} = props;
  const itemStyles: any = [styles.flex_col, styles.w_1_4, styles.items_center];
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlePress}
      style={itemStyles}>
      {icon}
      <Text style={[styles.text_sm, styles.text_content, styles.my_1]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeActionItem;
