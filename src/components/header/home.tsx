import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {getColor, tailwind} from '@/core/tailwind';
import {RouteConfig} from '@/constants/navigation';
import {IconUser} from '@/components/icons';

const HeaderHome = (props: any) => {
  const {navigation} = props;

  const handleItemPress = () => {
    navigation.navigate(RouteConfig.Setting.name);
  };

  return (
    <View style={tailwind('px-5 flex flex-row items-center')}>
      <TouchableOpacity onPress={handleItemPress} activeOpacity={0.5}>
        <IconUser width={16} height={16} fill={getColor('gray-600')} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderHome;
