import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {tailwind, getColor} from '@/core/tailwind';
import ScreenHeader from '@/components/common/screenHeader';

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

const HeaderRightComponent = () => {
  return (
    <View style={tailwind('flex flex-row items-center')}>
      <Icon name="bell" size={18} color={getColor('gray-600')} />
    </View>
  );
};

const ListItem = (props: any) => {
  const {item} = props;
  return (
    <View
      style={tailwind(
        'bg-white flex flex-row justify-between items-center border-b border-gray-100 p-4',
      )}>
      <View style={tailwind('flex flex-row items-center')}>
        <Icon name={item.icon} size={18} style={tailwind('text-gray-800')} />
        <Text style={tailwind('text-gray-800 text-base ml-3')}>
          {item.name}
        </Text>
      </View>
      <Icon name="arrow-right" size={16} style={tailwind('text-gray-700')} />
    </View>
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
    <View style={tailwind('flex-1')}>
      <ScreenHeader title="我" rightComponent={<HeaderRightComponent />} />
      <View style={tailwind('py-4')}>
        {profileItems.map((item: any, index: number) => (
          <ListGroup key={index} group={item} />
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;
