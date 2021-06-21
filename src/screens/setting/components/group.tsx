import React from 'react';
import {View} from 'react-native';
import useTheme from '@/core/theme';
import SettingItem from './item';

interface IProps {
  data: any;
}

const SettingGroup = (props: IProps) => {
  const {styles} = useTheme();
  const {data} = props;
  return (
    <View style={[styles.mb_3]}>
      {data.map((item: any, index: number) => (
        <SettingItem key={index} data={item} />
      ))}
    </View>
  );
};

export default SettingGroup;
