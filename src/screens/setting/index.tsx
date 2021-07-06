import React, {useState, useCallback} from 'react';
import {View, Share, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Confirm from '@/components/confirm';
import {ResponseCode, ScreenType} from '@/constants/enum';
import {SettingAboutScreen} from '@/screens';
import {useTheme} from '@/hooks';
import {String, Toaster} from '@/utils';
import {SettingProfile, SettingTheme, SettingGroup} from './components';

const SettingContent = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  return (
    <View style={[styles.mb_3]}>
      {data.map((group: any, index: number) => (
        <SettingGroup key={`setting_${index}`} data={group} />
      ))}
    </View>
  );
};

const SettingScreen = ({navigation}: any) => {
  const {styles} = useTheme();
  const [logoutConfirmVisible, setLogoutConfirmVisible] = useState(false);
  const [resetConfirmVisible, setResetConfirmVisible] = useState(false);
  const dispatch = useDispatch();
  const {info: systemInfo} = useSelector((state: any) => state.system);

  const handleLogoutPress = useCallback(() => {
    setLogoutConfirmVisible(true);
  }, []);

  const handleLogoutSubmit = useCallback(() => {
    setLogoutConfirmVisible(false);
    dispatch({
      type: 'account/logout',
    });
    dispatch({
      type: 'user/resetInfo',
    });
  }, [dispatch]);

  const handleResetPress = useCallback(() => {
    setResetConfirmVisible(true);
  }, []);

  const handleSharePress = useCallback(async () => {
    const {name, slogan, site_url} = systemInfo;
    const shareMsg = `${name} | ${slogan}(${site_url})`;
    await Share.share({
      message: shareMsg,
    });
  }, [systemInfo]);

  const handleResetSubmit = useCallback(async () => {
    setResetConfirmVisible(false);
    setLogoutConfirmVisible(false);
    const resetRes: any = await dispatch({
      type: 'user/reset',
    });
    const {code, content} = resetRes;
    if (code === ResponseCode.SUCCESS) {
      Toaster.show(content);
      await dispatch({
        type: 'account/logout',
      });
      dispatch({
        type: 'user/resetInfo',
      });
    }
  }, [dispatch]);

  const handleAboutPress = useCallback(() => {
    navigation.navigate(SettingAboutScreen.name);
  }, [navigation]);

  const settingItems = [
    [
      {
        name: '关于我们',
        handlePress: handleAboutPress,
      },
      {
        name: '应用分享',
        handlePress: handleSharePress,
      },
    ],
    [
      {
        name: '退出登录',
        handlePress: handleLogoutPress,
      },
      {
        name: '账户重置',
        handlePress: handleResetPress,
      },
    ],
  ];

  return (
    <View style={[styles.screen_container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.screen_container, styles.py_4]}>
        <SettingProfile />
        <SettingTheme />
        <SettingContent data={settingItems} />
      </ScrollView>

      {logoutConfirmVisible ? (
        <Confirm
          title={'确定要退出登录吗？'}
          handleSubmit={handleLogoutSubmit}
          handleCancel={() => setLogoutConfirmVisible(false)}
        />
      ) : null}

      {resetConfirmVisible ? (
        <Confirm
          title={'确定要重置账户吗？'}
          text={'该操作将会清空账户数据，请谨慎考虑。'}
          handleSubmit={handleResetSubmit}
          handleCancel={() => setResetConfirmVisible(false)}
        />
      ) : null}
    </View>
  );
};

export default {
  name: String.getRandomString(),
  title: '设置',
  screen: SettingScreen,
  type: [ScreenType.STACK],
};
