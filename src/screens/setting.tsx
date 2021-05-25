import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {tailwind} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';

const profileItems = [
  [
    {
      name: '钱包管理',
      icon: 'pocket',
    },
  ],
  [
    {
      name: '地址本',
      icon: 'file-text',
    },
    {
      name: '使用设置',
      icon: 'settings',
    },
  ],
  [
    {
      name: '帮助',
      icon: 'help-circle',
    },
    {
      name: '反馈',
      icon: 'message-circle',
    },
  ],
  [
    {
      name: '关于我们',
      icon: 'home',
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
        <Text style={tailwind('text-gray-800 text-base ml-3')}>
          {item.name}
        </Text>
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

  const {avatar, nick_name, login_name} = userInfo;

  return (
    <View
      style={tailwind(
        'bg-white p-5 flex-row items-center justify-between mb-3',
      )}>
      <View style={tailwind('flex-row items-center')}>
        <Image
          source={{uri: avatar}}
          style={tailwind('w-10 h-10 rounded-full mr-4')}
        />
        <View style={tailwind('')}>
          <Text style={tailwind('text-lg text-gray-800')}>{nick_name}</Text>
          <Text style={tailwind('text-base text-gray-600')}>{login_name}</Text>
        </View>
      </View>
    </View>
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
