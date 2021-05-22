import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {tailwind} from '@/core/tailwind';

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
      name: '用户协议',
      icon: 'file',
    },
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
        <Icon name={item.icon} size={18} style={tailwind('text-gray-800')} />
        <Text style={tailwind('text-gray-800 text-base ml-3')}>
          {item.name}
        </Text>
      </View>
      <Icon name="arrow-right" size={16} style={tailwind('text-gray-700')} />
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

const ProfileScreen = ({}: any) => {
  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <View style={tailwind('py-4')}>
        {profileItems.map((item: any, index: number) => (
          <ListGroup key={index} group={item} />
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;
