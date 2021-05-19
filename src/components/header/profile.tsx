import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {getColor, tailwind} from '@/core/tailwind';
import FavoriteSvg from '@/assets/svg/favorite-o.svg';

const HeaderProfile = (props: any) => {
  const {navigation} = props;

  const onPress = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={tailwind('px-5 flex flex-row items-center')}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <FavoriteSvg fill={getColor('gray-600')} width={18} height={18} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderProfile;
