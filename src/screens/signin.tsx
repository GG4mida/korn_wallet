import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';
import Styles from '@/core/styles';
import Icon from 'react-native-vector-icons/Feather';
import LogoSvg from '@/assets/svg/logo.svg';

const HeaderLeftComponent = () => {
  return (
    <View style={tailwind('ml-5 mr-2')}>
      <Icon name="arrow-left" size={18} color={getColor('gray-600')} />
    </View>
  );
};

const SigninScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-gray-600'),
      headerBackImage: () => <HeaderLeftComponent />,
    });
  }, [navigation]);

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
              style={Styles.textInput}
              maxFontSizeMultiplier={2}
              allowFontScaling={false}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              textContentType="username"
              onChangeText={() => null}
              placeholder="用户名..."
            />
          </View>
          <View style={tailwind('mb-5')}>
            <TextInput
              style={Styles.textInput}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              onChangeText={() => null}
              placeholder="登录密码..."
            />
          </View>
          <View style={tailwind('mb-5')}>
            <TextInput
              style={Styles.textInput}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              onChangeText={() => null}
              placeholder="确认密码..."
            />
          </View>
          <View style={tailwind('mb-5')}>
            <TouchableOpacity
              onPress={() => null}
              activeOpacity={0.5}
              style={Styles.button}>
              <Text style={tailwind('text-base text-white')}>注册</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center justify-center mb-10')}>
        <Text style={tailwind('text-gray-500 text-base')}>3.2.3</Text>
      </View>
    </View>
  );
};

export default SigninScreen;
