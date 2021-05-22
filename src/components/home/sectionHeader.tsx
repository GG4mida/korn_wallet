import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {RouteConfig} from '@/constants/navigation';

import {tailwind} from '@/core/tailwind';

const HomeSectionHeader = () => {
  const navigation = useNavigation();
  const {holds} = useSelector((state: any) => state.user);

  const handleOperatePress = useCallback(() => {
    navigation.navigate(RouteConfig.Operate.name);
  }, [navigation]);

  return (
    <View
      style={tailwind('mt-8 mb-5 flex flex-row justify-between items-center')}>
      <Text style={tailwind('text-xl text-gray-700')}>持仓</Text>
      {holds && holds.length ? (
        <TouchableOpacity
          onPress={handleOperatePress}
          activeOpacity={0.5}
          style={tailwind('flex flex-row items-center')}>
          <Text style={tailwind('text-base text-yellow-500')}>交易记录</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default HomeSectionHeader;
