import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {tailwind} from '@/core/tailwind';
import {RouteConfig} from '@/constants/navigation';

const HeaderHome = (props: any) => {
  const {navigation} = props;
  const {info: userInfo} = useSelector((state: any) => state.user);
  const {avatar} = userInfo;
  const handleItemPress = () => {
    navigation.navigate(RouteConfig.Setting.name);
  };

  return (
    <View style={tailwind('px-5 flex flex-row items-center')}>
      <TouchableOpacity onPress={handleItemPress} activeOpacity={0.5}>
        <Image
          source={{uri: avatar}}
          style={tailwind('w-4 h-4 rounded-full')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderHome;
