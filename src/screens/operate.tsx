import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';
import LinearGradient from 'react-native-linear-gradient';

const OperateScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50 p-5')}>
      <View>
        <Text style={tailwind('mb-4 text-sm text-gray-600 text-center')}>
          累计 20 条交易记录
        </Text>

        <LinearGradient
          colors={[getColor('yellow-500'), getColor('red-500')]}
          start={{x: 1, y: 0}}
          end={{x: 0.2, y: 0}}
          style={tailwind('p-6 rounded-xl mb-4')}>
          <View
            style={tailwind('flex flex-row items-center justify-between mb-4')}>
            <View style={tailwind('flex-row items-center')}>
              <Text style={tailwind('text-white text-base mr-2')}>BTC</Text>
              <Text style={tailwind('text-white text-sm')}>买入</Text>
            </View>

            <Text style={tailwind('text-gray-200 text-xs')}>
              2021-05-12 12:34:41
            </Text>
          </View>
          <View style={tailwind('flex flex-row justify-between items-end')}>
            <View style={tailwind('w-1/3')}>
              <Text style={tailwind('text-sm text-white')}>数量</Text>
              <Text style={tailwind('text-base text-white')}>0.3412</Text>
            </View>
            <View style={tailwind('w-1/3 items-end')}>
              <Text style={tailwind('text-sm text-white')}>金额</Text>
              <Text style={tailwind('text-base text-white')}>$60000.00</Text>
            </View>
            <View style={tailwind('w-1/3 items-end')}>
              <Text style={tailwind('text-sm text-white')}>价格</Text>
              <Text style={tailwind('text-base text-white')}>$6312.00</Text>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={[getColor('gray-500'), getColor('green-500')]}
          start={{x: 1, y: 0}}
          end={{x: 0.2, y: 0}}
          style={tailwind('p-6 rounded-xl mb-4')}>
          <View
            style={tailwind('flex flex-row items-center justify-between mb-4')}>
            <View style={tailwind('flex-row items-center')}>
              <Text style={tailwind('text-white text-base mr-2')}>BTC</Text>
              <Text style={tailwind('text-white text-sm')}>卖出</Text>
            </View>
            <Text style={tailwind('text-gray-200 text-xs')}>
              2021-05-12 12:34:41
            </Text>
          </View>
          <View style={tailwind('flex flex-row justify-between items-end')}>
            <View style={tailwind('w-1/3')}>
              <Text style={tailwind('text-sm text-white')}>数量</Text>
              <Text style={tailwind('text-base text-white')}>0.3412</Text>
            </View>
            <View style={tailwind('w-1/3 items-end')}>
              <Text style={tailwind('text-sm text-white')}>金额</Text>
              <Text style={tailwind('text-base text-white')}>$60000.00</Text>
            </View>
            <View style={tailwind('w-1/3 items-end')}>
              <Text style={tailwind('text-sm text-white')}>价格</Text>
              <Text style={tailwind('text-base text-white')}>$6312.00</Text>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={[getColor('yellow-500'), getColor('red-500')]}
          start={{x: 1, y: 0}}
          end={{x: 0.2, y: 0}}
          style={tailwind('p-6 rounded-xl mb-4')}>
          <View
            style={tailwind('flex flex-row items-center justify-between mb-4')}>
            <View style={tailwind('flex-row items-center')}>
              <Text style={tailwind('text-white text-base mr-2')}>BTC</Text>
              <Text style={tailwind('text-white text-sm')}>买入</Text>
            </View>

            <Text style={tailwind('text-gray-200 text-xs')}>
              2021-05-12 12:34:41
            </Text>
          </View>
          <View style={tailwind('flex flex-row justify-between items-end')}>
            <View style={tailwind('w-1/3')}>
              <Text style={tailwind('text-sm text-white')}>数量</Text>
              <Text style={tailwind('text-base text-white')}>0.3412</Text>
            </View>
            <View style={tailwind('w-1/3 items-end')}>
              <Text style={tailwind('text-sm text-white')}>金额</Text>
              <Text style={tailwind('text-base text-white')}>$60000.00</Text>
            </View>
            <View style={tailwind('w-1/3 items-end')}>
              <Text style={tailwind('text-sm text-white')}>价格</Text>
              <Text style={tailwind('text-base text-white')}>$6312.00</Text>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={[getColor('gray-500'), getColor('green-500')]}
          start={{x: 1, y: 0}}
          end={{x: 0.2, y: 0}}
          style={tailwind('p-6 rounded-xl mb-4')}>
          <View
            style={tailwind('flex flex-row items-center justify-between mb-4')}>
            <View style={tailwind('flex-row items-center')}>
              <Text style={tailwind('text-white text-base mr-2')}>BTC</Text>
              <Text style={tailwind('text-white text-sm')}>卖出</Text>
            </View>
            <Text style={tailwind('text-gray-200 text-xs')}>
              2021-05-12 12:34:41
            </Text>
          </View>
          <View style={tailwind('flex flex-row justify-between items-end')}>
            <View style={tailwind('w-1/3')}>
              <Text style={tailwind('text-sm text-white')}>数量</Text>
              <Text style={tailwind('text-base text-white')}>0.3412</Text>
            </View>
            <View style={tailwind('w-1/3 items-end')}>
              <Text style={tailwind('text-sm text-white')}>金额</Text>
              <Text style={tailwind('text-base text-white')}>$60000.00</Text>
            </View>
            <View style={tailwind('w-1/3 items-end')}>
              <Text style={tailwind('text-sm text-white')}>价格</Text>
              <Text style={tailwind('text-base text-white')}>$6312.00</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default OperateScreen;
