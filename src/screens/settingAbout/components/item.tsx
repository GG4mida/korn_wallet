import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from '@/hooks';
import {IconForward} from '@/components/icons';

const SettingAboutItems = (props: any) => {
  const {styleConfig, styles} = useTheme();
  const {data} = props;
  const {name, value, isTail} = data;
  return (
    <TouchableOpacity
      onPress={data.handlePress}
      activeOpacity={0.5}
      style={[
        styles.flex_container_between,
        styles.px_5,
        styles.py_3,
        styles.bg_foreground,
        styles.border_b,
      ]}>
      <View style={[styles.flex_container_center]}>
        <Text style={[styles.text_md, styles.text_content]}>{name}</Text>
      </View>
      <View style={[styles.flex_container_center]}>
        {value ? (
          <Text
            style={[
              styles.text_sm,
              styles.text_content_secondary,
              styles.mr_1,
            ]}>
            {value}
          </Text>
        ) : null}
        {isTail === true ? (
          <IconForward
            width={18}
            height={18}
            fill={styleConfig.color.content_secondary}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default SettingAboutItems;
