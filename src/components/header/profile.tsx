import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {getColor, tailwind} from '@/core/tailwind';
import FavoriteSvg from '@/assets/svg/favorite.svg';

const HeaderProfile = (props: any) => {
  const {navigation} = props;

  const onPress = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={tailwind('px-3 flex flex-row items-center')}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <FavoriteSvg fill={getColor('gray-600')} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderProfile;
