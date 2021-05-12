import React from 'react';
import {View, Text} from 'react-native';
import {tailwind} from '@/core/tailwind';

const RegisterScreen = ({}: any) => {
  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <View style={tailwind('py-4')}>
        <Text>注册页面</Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
