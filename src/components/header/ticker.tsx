import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';
import Icon from 'react-native-vector-icons/Feather';

const HeaderTicker = (props: any) => {
  const {navigation} = props;

  const onPress = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={tailwind('px-5 flex flex-row items-center')}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <Icon name="compass" size={18} color={getColor('gray-600')} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTicker;
