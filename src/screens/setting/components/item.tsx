import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconForward} from '@/components/icons';
import {useTheme} from '@/hooks';

interface IProps {
  data: any;
}

const SettingItem = (props: IProps) => {
  const {styleConfig, styles} = useTheme();
  const {data} = props;
  return (
    <TouchableOpacity
      onPress={data.handlePress}
      activeOpacity={0.5}
      style={[
        styles.flex_container_between,
        styles.px_4,
        styles.py_3,
        styles.bg_foreground,
        styles.border_b,
      ]}>
      <View style={[styles.flex_container_center]}>
        <Text style={[styles.text_md, styles.text_content]}>{data.name}</Text>
      </View>
      <View>
        <IconForward width={18} height={18} fill={styleConfig.color.hint} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;
