import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {tailwind} from '@/core/tailwind';

const Tab = (props: any) => {
  const {data, value, onChange} = props;
  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-center bg-gray-50 border-b border-gray-50 p-3',
      )}>
      <View
        style={tailwind(
          'flex flex-row bg-white border border-gray-50 rounded-3xl',
        )}>
        {data.map((tabItem: any, index: number) => {
          let containerStyle = null;
          let textStyle = null;
          if (tabItem.name === value) {
            containerStyle =
              'w-20 py-2 px-3 flex flex-row items-center justify-center bg-red-500 rounded-3xl';
            textStyle = 'text-white';
          } else {
            containerStyle =
              'w-20 py-2 px-3 flex flex-row items-center justify-center';
            textStyle = 'text-gray-700';
          }
          return (
            <TouchableOpacity
              onPress={() => onChange(tabItem.name)}
              key={index}
              activeOpacity={0.5}
              style={tailwind(containerStyle)}>
              <Text style={tailwind(textStyle)}>{tabItem.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Tab;
