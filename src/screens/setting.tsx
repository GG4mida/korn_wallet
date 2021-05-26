import React, {useState, useCallback} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {tailwind, getColor} from '@/core/tailwind';
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
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-50 px-5 py-4',
      )}>
      <View style={tailwind('flex flex-row items-center')}>
        <Text style={tailwind('text-gray-800 text-base')}>{data.name}</Text>
      </View>
      <View>
        <IconForward width={18} height={18} fill={getColor('gray-500')} />
      </View>
    </TouchableOpacity>
  );
};

const SettingGroup = (props: any) => {
  const {data} = props;
  return (
    <View style={tailwind('mb-4')}>
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
      style={tailwind('bg-white p-5')}>
      <View style={tailwind('flex-row items-center justify-between')}>
        <View style={tailwind('flex-row items-center')}>
          <Image
            source={{uri: avatar}}
            style={tailwind('w-10 h-10 rounded-full')}
          />
          <View style={tailwind('ml-4')}>
            <Text style={tailwind('text-lg text-gray-800')}>{nick_name}</Text>
            <Text style={tailwind('text-base text-gray-600')}>
              {login_name}
            </Text>
          </View>
        </View>
        <View>
          <IconForward width={18} height={18} fill={getColor('gray-500')} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SettingContent = (props: any) => {
  const {data} = props;
  return (
    <View style={tailwind('py-4')}>
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
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  const handleLogoutPress = useCallback(() => {
    setLogoutConfirmVisible(true);
  }, []);

  const handleLogoutSubmit = useCallback(() => {
    console.info('handleLogoutSubmit');
    setLogoutConfirmVisible(false);
  }, []);

  const handleResetPress = useCallback(() => {
    setResetConfirmVisible(true);
  }, []);

  const handleResetSubmit = useCallback(() => {
    console.info('handleResetSubmit');
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
    <View style={tailwind('flex-1')}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={tailwind('flex-1 bg-gray-50 py-5')}>
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
          handleCancel={() => setLogoutConfirmVisible(false)}
        />
      ) : null}
    </View>
  );
};

export default SettingScreen;
