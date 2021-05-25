import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {tailwind, getColor} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';
import {IconForward} from '@/components/icons';
import Avatar from '@/components/avatar';

const profileItems = [
  [
    {
      name: '使用帮助',
      icon: 'help-circle',
    },
    {
      name: '问题反馈',
      icon: 'message-circle',
    },
  ],
  [
    {
      name: '关于我们',
      icon: 'home',
    },
  ],
  [
    {
      name: '注销',
      icon: 'file-text',
    },
    {
      name: '重置',
      icon: 'settings',
    },
  ],
];

const ListItem = (props: any) => {
  const {item} = props;
  return (
    <TouchableOpacity
      onPress={() => null}
      activeOpacity={0.5}
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-50 px-5 py-4',
      )}>
      <View style={tailwind('flex flex-row items-center')}>
        <Text style={tailwind('text-gray-800 text-base')}>{item.name}</Text>
      </View>
      <View>
        <IconForward width={18} height={18} fill={getColor('gray-500')} />
      </View>
    </TouchableOpacity>
  );
};

const ListGroup = (props: any) => {
  const {group} = props;
  return (
    <View style={tailwind('mb-4')}>
      {group.map((item: any, index: number) => (
        <ListItem key={index} item={item} />
      ))}
    </View>
  );
};

const SettingProfile = () => {
  const {info: userInfo} = useSelector((state: any) => state.user);
  const {nick_name, login_name} = userInfo;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => null}
      style={tailwind('bg-white p-5')}>
      <View style={tailwind('flex-row items-center justify-between')}>
        <View style={tailwind('flex-row items-center')}>
          <Avatar text={nick_name} />
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

const SettingScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50 py-5')}>
      <SettingProfile />
      <View style={tailwind('py-4')}>
        {profileItems.map((item: any, index: number) => (
          <ListGroup key={index} group={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
