import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {tailwind} from '@/core/tailwind';

const HeaderProfile = (props: any) => {
  const {navigation} = props;

  const onPress = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={tailwind('px-5 flex flex-row items-center')}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5} />
    </View>
  );
};

export default HeaderProfile;
