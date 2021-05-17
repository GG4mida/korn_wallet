import React from 'react';
import {View, Text} from 'react-native';
import {tailwind} from '@/core/tailwind';

const SplashScreen = ({}: any) => {
  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <View style={tailwind('py-4 flex flex-row justify-center')}>
        <Text>这是启动页</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
