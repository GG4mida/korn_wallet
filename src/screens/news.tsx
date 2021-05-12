import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {tailwind} from '@/core/tailwind';

const NewsContent = () => {
  return (
    <View style={tailwind('bg-white p-4 mb-3')}>
      <View style={tailwind('mb-1')}>
        <Text style={tailwind('text-sm text-gray-500')}>15:32</Text>
      </View>

      <View style={tailwind('mb-1')}>
        <Text style={tailwind('text-lg font-medium text-gray-800')}>
          USDT 筹码分布从较为集中变为高度集中
        </Text>
      </View>

      <View style={tailwind('mb-2')}>
        <Text style={tailwind('text-base text-gray-600')}>
          根据 LongHash 大数据监控，USDT
          筹码分布从较为集中变为高度集中，筹码集中度上升。其中，68.08% 的 USDT
          集中于 Huobi 交易所。
        </Text>
      </View>

      <View>
        <Text style={tailwind('text-sm text-gray-500')}>Twitter</Text>
      </View>
    </View>
  );
};

const NewsTabs = () => {
  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-center bg-gray-50 border-b border-gray-100 p-3',
      )}>
      <View
        style={tailwind(
          'flex flex-row bg-white border border-gray-100 rounded-3xl',
        )}>
        <TouchableOpacity
          onPress={() => null}
          activeOpacity={0.5}
          style={tailwind(
            'w-20 py-2 px-3 bg-red-500 rounded-3xl flex flex-row justify-center items-center',
          )}>
          <Text style={tailwind('text-white')}>快讯</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          activeOpacity={0.5}
          style={tailwind(
            'w-20 py-2 px-3 flex flex-row justify-center items-center',
          )}>
          <Text style={tailwind('text-gray-700')}>推特</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NewsScreen = ({}: any) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50')}>
      <NewsTabs />

      <NewsContent />
      <NewsContent />
      <NewsContent />
    </ScrollView>
  );
};

export default NewsScreen;
