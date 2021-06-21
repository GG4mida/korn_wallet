import React from 'react';
import {View} from 'react-native';
import useTheme from '@/core/theme';
import SettingAboutItems from './item';

const SettingAboutGroup = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  return (
    <View style={[styles.mb_3]}>
      {data.map((item: any, index: number) => (
        <SettingAboutItems key={index} data={item} />
      ))}
    </View>
  );
};

const SettingAboutContent = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  return (
    <View style={[styles.mb_3]}>
      {data.map((group: any, index: number) => (
        <SettingAboutGroup key={`setting_${index}`} data={group} />
      ))}
    </View>
  );
};

export default SettingAboutContent;
