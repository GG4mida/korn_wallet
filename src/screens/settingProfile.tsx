import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderBack from '@/components/header/back';
import {styles, styleConfig} from '@/styles';
import {Toaster} from '@/utils';
import {ResponseCode} from '@/constants/enum';
import {
  SettingAvatar,
  SettingNickName,
  SettingEmail,
  SettingSubmit,
} from '@/components/settingProfile';

const SettingProfileScreen = ({navigation}: any) => {
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
      await dispatch({
        type: 'user/info',
      });

      Toaster.show(content, {
        onHidden: () => {
          navigation.goBack();
        },
      });
    }
  }, [dispatch, navigation, userNickName, userEmail, userAvatar]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => (
        <SettingSubmit handlePress={handleSubmit} loading={loading} />
      ),
    });
  }, [navigation, handleSubmit, loading]);

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

export default SettingProfileScreen;
