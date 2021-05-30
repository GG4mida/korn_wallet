import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RouteConfig} from '@/constants/navigation';
import {useNavigation} from '@react-navigation/native';

import {tailwind, getColor} from '@/core/tailwind';
import {IconDiscoveryBrowser, IconForward} from '@/components/icons';

const DiscoveryBrowser = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate(RouteConfig.DiscoveryBrowser.name);
  }, [navigation]);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
      <LinearGradient
        colors={[getColor('gray-500'), getColor('green-500')]}
        start={{x: 1, y: 0}}
        end={{x: 0.2, y: 0}}
        style={tailwind('p-6 rounded-xl bg-white mb-4')}>
        <View style={tailwind('flex flex-row items-center justify-between')}>
          <View style={tailwind('flex flex-row items-center')}>
            <IconDiscoveryBrowser
              width={32}
              height={32}
              fill={getColor('green-100')}
              style={tailwind('mr-3')}
            />
            <View>
              <Text style={tailwind('text-white text-lg')}>区块浏览器</Text>
              <Text style={tailwind('text-gray-100 text-base')}>
                区块链上信息浏览及查询
              </Text>
            </View>
          </View>
          <View>
            <IconForward width={18} height={18} fill={getColor('gray-100')} />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default DiscoveryBrowser;
