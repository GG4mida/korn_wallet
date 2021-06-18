import React from 'react';
import {View, Text} from 'react-native';
import useTheme from '@/core/theme';

const OverViewItem = (props: any) => {
  const {styles} = useTheme();
  const {label, value, descr, suffix} = props;
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
          {suffix ? (
            <Text style={[styles.text_md, styles.text_content]}>{suffix}</Text>
          ) : null}
        </View>
      </View>
      {descr ? (
        <Text
          style={[styles.text_sm, styles.text_hint, styles.mx_4, styles.my_2]}>
          {descr}
        </Text>
      ) : null}
    </View>
  );
};

export default OverViewItem;
