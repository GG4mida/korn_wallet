import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {tailwind} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';

const WalletScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50')}>
      <View style={tailwind('py-2')}>
        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>初始资金</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>$</Text>
              <Text style={tailwind('text-lg text-gray-800')}>100000.00</Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>
            新用户账户初始资金
          </Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>当前资产</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>$</Text>
              <Text style={tailwind('text-lg text-gray-800')}>120000.00</Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>
            当前账户累计资产，累计资产 = 账户奖金 + 持仓价值
          </Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>持仓价值</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>$</Text>
              <Text style={tailwind('text-lg text-gray-800')}>20000.00</Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>
            当前持仓的累计价值
          </Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>累计盈利</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>$</Text>
              <Text style={tailwind('text-lg text-gray-800')}>20000.00</Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>
            账户盈利金额
          </Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>盈利率</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>20.00%</Text>
            </View>
          </View>

          <Text style={tailwind('text-sm text-gray-500 mx-5')}>账户盈利率</Text>
        </View>

        <View style={tailwind('my-3')}>
          <View
            style={tailwind(
              'px-5 py-3 mb-2 flex-row items-center justify-between bg-white',
            )}>
            <Text style={tailwind('text-gray-800 text-base')}>注册时间</Text>
            <View style={tailwind('flex flex-row items-center')}>
              <Text style={tailwind('text-lg text-gray-800')}>
                2021-05-21 13:12:45
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WalletScreen;
