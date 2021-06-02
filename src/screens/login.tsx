import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RouteConfig} from '@/constants/navigation';
import {ResponseCode} from '@/constants/enum';
import {Toaster, Validator} from '@/utils';
import LogoSvg from '@/assets/svg/logo.svg';
import {LoadingActivity, LoadingMask} from '@/components/loading';
import {IconArrowRight} from '@/components/icons';
import useTheme from '@/core/theme';

const LoginScreen: React.FC = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  const [username, setUserName] = useState('fuckusername');
  const [password, setPassword] = useState('fuckpassword');

  const dispatch = useDispatch();
  const loading = useSelector(
    (state: any) => state.loading.effects['account/login'],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LoadingActivity loading={loading} />,
    });
  }, [navigation, loading]);

  const handleSigninPress = useCallback(() => {
    navigation.navigate(RouteConfig.Signup.name);
  }, [navigation]);

  const handleSubmitPress = useCallback(async () => {
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
    const loginRes: any = await dispatch({
      type: 'account/login',
      payload: {
        username,
        password,
      },
    });

    const {code} = loginRes;

    if (code === ResponseCode.SUCCESS) {
      dispatch({
        type: 'user/info',
      });
    }
  }, [username, password, loading, dispatch]);

  return (
    <View style={[styles.screen_container_with_padding, styles.bg_foreground]}>
      <View style={[styles.flex_1]}>
        <View
          style={[
            styles.flex_container_center,
            styles.flex_col,
            styles.py_5,
            styles.mb_3,
          ]}>
          <LogoSvg width={64} height={64} />
          <Text
            style={[
              styles.text_lg,
              styles.mb_1,
              styles.mt_2,
              styles.text_leading,
            ]}>
            Korn
          </Text>
          <Text style={[styles.text_md, styles.text_content]}>
            Nothing else matters
          </Text>
        </View>
        <View style={[styles.px_3]}>
          <View style={styles.mb_4}>
            <TextInput
              style={styles.text_input}
              maxFontSizeMultiplier={2}
              allowFontScaling={false}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              textContentType="username"
              onChangeText={setUserName}
              placeholder="用户名..."
              placeholderTextColor={styleConfig.color.hint}
              value={username}
            />
          </View>
          <View style={styles.mb_4}>
            <TextInput
              style={styles.text_input}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              onChangeText={setPassword}
              placeholder="用户密码..."
              placeholderTextColor={styleConfig.color.hint}
              value={password}
            />
          </View>
          <View style={styles.mb_4}>
            <TouchableOpacity
              onPress={handleSubmitPress}
              activeOpacity={0.5}
              disabled={loading}
              style={styles.button_green}>
              <Text style={[styles.text_md, styles.text_white]}>登录</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.flex_container_center]}
              activeOpacity={0.5}
              onPress={handleSigninPress}>
              <Text style={[styles.text_md, styles.text_content_secondary]}>
                没有账户，免费注册
              </Text>
              <IconArrowRight
                width={16}
                height={16}
                fill={styleConfig.color.content_secondary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.flex_container_center, styles.mb_5]}>
        <Text style={[styles.text_md, styles.text_hint]}>3.2.3</Text>
      </View>
      <LoadingMask loading={loading} />
    </View>
  );
};

export default LoginScreen;
