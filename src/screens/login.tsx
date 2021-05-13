import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {tailwind, getColor} from '@/core/tailwind';
import LogoSvg from '@/assets/svg/logo.svg';

const LoginScreen = ({navigation}: any) => {
  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <View style={tailwind('flex-1')}>
        <View
          style={tailwind('flex flex-col justify-center items-center pt-8')}>
          <LogoSvg fill={getColor('gray-400')} width={64} height={64} />
          <Text style={tailwind('text-xl text-gray-800 mt-3 mb-1')}>Korn</Text>
          <Text style={tailwind('text-base text-gray-600')}>
            Nothing else matters
          </Text>
        </View>
        <View style={tailwind('p-8')}>
          <View style={tailwind('mb-5')}>
            <TextInput
              style={tailwind(
                'p-3 bg-gray-50 border border-gray-200 rounded-full',
              )}
              placeholder="用户名..."
              onChangeText={() => null}
            />
          </View>
          <View style={tailwind('mb-5')}>
            <TextInput
              style={tailwind(
                'p-3 bg-gray-50 border border-gray-200 rounded-full',
              )}
              placeholder="用户密码..."
              onChangeText={() => null}
            />
          </View>
          <View style={tailwind('mb-5')}>
            <TouchableOpacity
              onPress={() => null}
              activeOpacity={0.5}
              style={tailwind(
                'p-2 bg-green-500 rounded-full flex flex-row items-center justify-center',
              )}>
              <Text style={tailwind('text-base text-white')}>登录</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={tailwind('flex flex-row items-center justify-center')}
              activeOpacity={0.5}
              onPress={handleRegisterPress}>
              <Text style={tailwind('text-gray-600 text-sm mr-1')}>
                没有账户，免费注册
              </Text>
              <Icon name="arrow-right" size={16} color={getColor('gray-600')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center justify-center mb-10')}>
        <Text style={tailwind('text-gray-500 text-sm')}>3.2.3</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
