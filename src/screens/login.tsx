import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {tailwind, getColor} from '@/core/tailwind';
import Styles from '@/core/styles';
import {Toaster, Validator} from '@/utils';
import LogoSvg from '@/assets/svg/logo.svg';
import AccountAction from '@/store/actions/account';
import {LoadingActivity, LoadingMask} from '@/components/loading';

const LoginScreen: React.FC = ({navigation}: any) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.account);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LoadingActivity loading={loading} />,
    });
  }, [navigation, loading]);

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const handleSubmitPress = () => {
    if (loading === true) {
      return false;
    }
    if (!username) {
      Toaster.show('请输入用户名');
      return false;
    }

    if (!Validator.usernameValidator(username)) {
      Toaster.show('用户名格式错误');
      return false;
    }

    if (!password) {
      Toaster.show('请输入用户密码');
      return false;
    }

    if (!Validator.passwordValidator(password)) {
      Toaster.show('用户密码格式错误');
      return false;
    }

    dispatch(AccountAction.login(username, password));
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
              style={Styles.textInput}
              maxFontSizeMultiplier={2}
              allowFontScaling={false}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              textContentType="username"
              onChangeText={setUserName}
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
              onChangeText={setPassword}
              placeholder="用户密码..."
            />
          </View>
          <View style={tailwind('mb-5')}>
            <TouchableOpacity
              onPress={handleSubmitPress}
              activeOpacity={0.5}
              style={Styles.button}>
              <Text style={tailwind('text-base text-white')}>登录</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={tailwind('flex flex-row items-center justify-center')}
              activeOpacity={0.5}
              onPress={handleRegisterPress}>
              <Text style={tailwind('text-gray-600 text-base')}>
                没有账户，免费注册
              </Text>
              <Icon name="arrow-right" size={20} color={getColor('gray-600')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center justify-center mb-10')}>
        <Text style={tailwind('text-gray-500 text-base')}>3.2.3</Text>
      </View>

      <LoadingMask loading={loading} />
    </View>
  );
};

export default LoginScreen;
