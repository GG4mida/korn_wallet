import React, {useState, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Toaster, Validator, Device, String} from '@/utils';
import {ResponseCode, ScreenType} from '@/constants/enum';
import {LoadingActivity, LoadingMask} from '@/components/loading';
import Jumbo from '@/components/jumbo';
import {useTheme} from '@/hooks';

const SignupScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(
    (state: any) => state.loading.effects['account/signup'],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LoadingActivity loading={loading} />,
    });
  }, [navigation, loading]);

  const handleSubmitPress = async () => {
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
    if (!repassword) {
      Toaster.show('请再次输入密码');
      return false;
    }
    if (password !== repassword) {
      Toaster.show('两次输入密码不一致');
      return false;
    }
    const signupRes: any = await dispatch({
      type: 'account/signup',
      payload: {
        username,
        password,
        repassword,
        uniqueId: Device.getUniqueId(),
      },
    });
    const {code, content} = signupRes;
    if (code === ResponseCode.SUCCESS) {
      Toaster.show(content, {
        onHidden: () => {
          navigation.goBack();
        },
      });
    }
  };

  return (
    <View style={[styles.screen_container_with_padding, styles.bg_foreground]}>
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.flex_1]}>
        <Jumbo />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[styles.px_3]}>
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
              placeholder="登录密码..."
              placeholderTextColor={styleConfig.color.hint}
              value={password}
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
              onChangeText={setRepassword}
              placeholder="确认密码..."
              placeholderTextColor={styleConfig.color.hint}
              value={repassword}
            />
          </View>
          <View style={styles.mb_4}>
            <TouchableOpacity
              onPress={handleSubmitPress}
              activeOpacity={0.5}
              disabled={loading}
              style={styles.button_green}>
              <Text style={[styles.text_md, styles.text_white]}>注册</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <LoadingMask loading={loading} />
    </View>
  );
};

export default {
  name: String.getRandomString(),
  title: '注册',
  screen: SignupScreen,
  type: [ScreenType.NOAUTH],
};
