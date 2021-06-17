import React, {useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  Text,
  Switch,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import HeaderBack from '@/components/header/back';
import {IconForward} from '@/components/icons';
import Confirm from '@/components/confirm';
import {ThemeType, StorageKeys, ResponseCode} from '@/constants/enum';
import * as Screens from '@/screens';
import useTheme from '@/core/theme';
import {String, Storage} from '@/utils';
import {Toaster} from '@/utils';

const SettingItem = (props: any) => {
  const {styleConfig, styles} = useTheme();
  const {data} = props;
  return (
    <TouchableOpacity
      onPress={data.handlePress}
      activeOpacity={0.5}
      style={[
        styles.flex_container_between,
        styles.px_5,
        styles.py_3,
        styles.bg_foreground,
        styles.border_b,
      ]}>
      <View style={[styles.flex_container_center]}>
        <Text style={[styles.text_md, styles.text_content]}>{data.name}</Text>
      </View>
      <View>
        <IconForward
          width={18}
          height={18}
          fill={styleConfig.color.content_secondary}
        />
      </View>
    </TouchableOpacity>
  );
};

const SettingGroup = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  return (
    <View style={[styles.mb_3]}>
      {data.map((item: any, index: number) => (
        <SettingItem key={index} data={item} />
      ))}
    </View>
  );
};

const SettingTheme = () => {
  const dispatch = useDispatch();
  const {theme: themeType} = useSelector((state: any) => state.system);
  const defaultChecked = themeType === ThemeType.DARK;
  const [checked, setChecked] = useState(defaultChecked);
  const {styleConfig, styles} = useTheme();

  const handleCheckedChange = useCallback(
    (checkStatus: any) => {
      const theme = checkStatus === true ? ThemeType.DARK : ThemeType.LIGHT;
      dispatch({
        type: 'system/setTheme',
        payload: {
          theme,
        },
      });
      Storage.setItem(StorageKeys.THEME_TYPE, theme);
      setChecked(checkStatus);
    },
    [dispatch],
  );

  return (
    <TouchableOpacity
      onPress={() => null}
      activeOpacity={0.5}
      style={[
        styles.flex_container_between,
        styles.px_5,
        styles.py_3,
        styles.mb_3,
        styles.bg_foreground,
        styles.border_b,
      ]}>
      <View style={[styles.flex_container_center]}>
        <Text style={[styles.text_md, styles.text_content]}>暗黑模式</Text>
      </View>
      <View>
        <Switch
          trackColor={{
            false: styleConfig.color.gray_100,
            true: styleConfig.color.green,
          }}
          thumbColor={styleConfig.color.white}
          ios_backgroundColor={styleConfig.color.gray_200}
          onValueChange={handleCheckedChange}
          value={checked}
        />
      </View>
    </TouchableOpacity>
  );
};

const SettingProfile = () => {
  const {styleConfig, styles} = useTheme();
  const navigation = useNavigation();
  const {info: userInfo} = useSelector((state: any) => state.user);
  const {nick_name, login_name, avatar} = userInfo;

  const handleProfilePress = useCallback(() => {
    navigation.navigate(Screens.SettingProfile.name);
  }, [navigation]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleProfilePress}
      style={[styles.bg_foreground, styles.px_5, styles.py_3, styles.mb_3]}>
      <View style={[styles.flex_container_between]}>
        <View style={[styles.flex_container_center]}>
          <Image
            source={{uri: avatar}}
            style={[styles.img_user, styles.mr_3, styles.rounded_full]}
          />
          <View>
            <Text
              style={[styles.text_md, styles.text_bold, styles.text_content]}>
              {nick_name}
            </Text>
            <Text style={[styles.text_md, styles.text_content_secondary]}>
              {login_name}
            </Text>
          </View>
        </View>
        <View>
          <IconForward
            width={18}
            height={18}
            fill={styleConfig.color.content_secondary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
  const {styleConfig, styles} = useTheme();
  const [logoutConfirmVisible, setLogoutConfirmVisible] = useState(false);
  const [resetConfirmVisible, setResetConfirmVisible] = useState(false);
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, styleConfig]);

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
    }
  }, [dispatch]);

  const handleAboutPress = useCallback(() => {
    navigation.navigate(Screens.SettingAbout.name);
  }, [navigation]);

  const settingItems = [
    [
      {
        name: '关于我们',
        handlePress: handleAboutPress,
      },
    ],
    [
      {
        name: '退出登录',
        handlePress: handleLogoutPress,
      },
      {
        name: '重置',
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
  name: String.getUUID(),
  title: '设置',
  screen: SettingScreen,
};
