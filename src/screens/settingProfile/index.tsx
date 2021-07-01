import React, {useState, useCallback, useLayoutEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderBack, HeaderSubmit} from '@/components/header';
import {Toaster, String} from '@/utils';
import {ResponseCode, ScreenType} from '@/constants/enum';
import {useTheme} from '@/hooks';
import {SettingAvatar, SettingNickName, SettingEmail} from './components';

const SettingProfileScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  const dispatch = useDispatch();
  const {info: userInfo} = useSelector((state: any) => state.user);
  const loading = useSelector(
    (state: any) => state.loading.effects['user/update'],
  );
  const {nick_name, avatar, email} = userInfo;
  const [userNickName, setUserNickName] = useState(nick_name);
  const [userEmail, setUserEmail] = useState(email);
  const [userAvatar, setUserAvatar] = useState(avatar);

  const handleSubmit = useCallback(async () => {
    const updateRes: any = await dispatch({
      type: 'user/update',
      payload: {
        nickname: userNickName,
        email: userEmail,
        avatar: userAvatar,
      },
    });

    const {code, content} = updateRes;
    if (code === ResponseCode.SUCCESS) {
      Toaster.show(content);
      await dispatch({
        type: 'user/info',
      });
      navigation.goBack();
    }
  }, [dispatch, navigation, userNickName, userEmail, userAvatar]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => (
        <HeaderSubmit
          handlePress={handleSubmit}
          loading={loading}
          text="更新"
        />
      ),
    });
  }, [navigation, handleSubmit, loading, styleConfig]);

  return (
    <View style={[styles.screen_container]}>
      <View style={[styles.my_4]}>
        <SettingNickName value={userNickName} onChange={setUserNickName} />
        <SettingEmail value={userEmail} onChange={setUserEmail} />
        <SettingAvatar value={userAvatar} onChange={setUserAvatar} />
      </View>
    </View>
  );
};

export default {
  name: String.getUUID(),
  title: '个人信息',
  screen: SettingProfileScreen,
  type: [ScreenType.STACK],
};
