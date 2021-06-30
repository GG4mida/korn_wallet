import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@/hooks';

interface IProps {
  label: string;
  value: string;
}

const OverViewItem = (props: IProps) => {
  const {styles} = useTheme();
  const {label, value} = props;
  return (
    <View style={[styles.border_b]}>
      <View
        style={[
          styles.flex_container_between,
          styles.bg_foreground,
          styles.px_4,
          styles.py_3,
        ]}>
        <Text style={[styles.text_md, styles.text_content_secondary]}>
          {label}
        </Text>
        <View style={[styles.flex_container_center]}>
          <Text style={[styles.text_md, styles.text_content]}>{value}</Text>
        </View>
      </View>
    </View>
  );
};

export default OverViewItem;
