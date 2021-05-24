import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {tailwind} from '@/core/tailwind';
import {klineTab, klineTabs} from '@/constants/tab';

interface IProps {
  value: klineTab;
  onChange: any;
}

const CoinKlineBar = (props: IProps) => {
  const {value, onChange} = props;
  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-between border-b border-gray-50 bg-gray-50 px-3 py-2',
      )}>
      {klineTabs.map((tabItem: any, index: number) => {
        const activeStyle =
          tabItem.name === value ? 'bg-white border border-gray-100' : '';
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.5}
            onPress={() => onChange(tabItem.name)}
            style={tailwind(
              `rounded-full px-5 py-2 border border-gray-50 ${activeStyle}`,
            )}>
            <Text style={tailwind('text-gray-700')}>{tabItem.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CoinKlineBar;
