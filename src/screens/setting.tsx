import React, {useState, useCallback} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {styles, styleConfig} from '@/styles';
import HeaderBack from '@/components/header/back';
import {IconForward} from '@/components/icons';
import Confirm from '@/components/confirm';
import {RouteConfig} from '@/constants/navigation';

const SettingItem = (props: any) => {
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
  const {data} = props;
  return (
    <View style={[styles.mb_3]}>
      {data.map((item: any, index: number) => (
        <SettingItem key={index} data={item} />
      ))}
    </View>
  );
};

const SettingProfile = () => {
  const navigation = useNavigation();
  const {info: userInfo} = useSelector((state: any) => state.user);
  const {nick_name, login_name, avatar} = userInfo;

  const handleProfilePress = useCallback(() => {
    navigation.navigate(RouteConfig.SettingProfile.name);
  }, [navigation]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleProfilePress}
      style={[styles.bg_foreground, styles.px_5, styles.py_3]}>
      <View style={[styles.flex_container_between]}>
        <View style={[styles.flex_container_center]}>
          <Image
            source={{uri: avatar}}
            style={[styles.img_user, styles.mr_3, styles.rounded_full]}
          />
          <View>
            <Text style={[styles.text_lg, styles.text_content]}>
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
  const {data} = props;
  return (
    <View style={[styles.py_4]}>
      {data.map((group: any, index: number) => (
        <SettingGroup key={`setting_${index}`} data={group} />
      ))}
    </View>
  );
};

const SettingScreen = ({navigation}: any) => {
  const [logoutConfirmVisible, setLogoutConfirmVisible] = useState(false);
  const [resetConfirmVisible, setResetConfirmVisible] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  const handleLogoutPress = useCallback(() => {
    setLogoutConfirmVisible(true);
  }, []);

  const handleLogoutSubmit = useCallback(() => {
    setLogoutConfirmVisible(false);
  }, []);

  const handleResetPress = useCallback(() => {
    setResetConfirmVisible(true);
  }, []);

  const handleResetSubmit = useCallback(() => {
    setResetConfirmVisible(false);
  }, []);

  const handleHelpPress = useCallback(() => {
    navigation.navigate(RouteConfig.SettingHelp.name);
  }, [navigation]);

  const handleFeedbackPress = useCallback(() => {
    navigation.navigate(RouteConfig.SettingFeedback.name);
  }, [navigation]);

  const handleAboutPress = useCallback(() => {
    navigation.navigate(RouteConfig.SettingAbout.name);
  }, [navigation]);

  const settingItems = [
    [
      {
        name: '帮助文档',
        handlePress: () => handleHelpPress(),
      },
      {
        name: '问题反馈',
        handlePress: handleFeedbackPress,
      },
    ],
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

export default SettingScreen;