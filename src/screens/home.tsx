import React from 'react';
import {View, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {tailwind, getColor} from '@/core/tailwind';
import ScreenHeader from '@/components/common/screenHeader';

const HeaderRightComponent = () => {
  return (
    <View style={tailwind('flex flex-row items-center')}>
      <Icon name="file" size={18} color={getColor('gray-600')} />
    </View>
  );
};

const HomeScreen = ({}: any) => {
  return (
    <View style={tailwind('flex-1 bg-white')}>
      <ScreenHeader title="首页" rightComponent={<HeaderRightComponent />} />
      <View style={tailwind('p-3')}>
        <View style={tailwind('bg-yellow-600 rounded-xl')}>
          <LinearGradient
            colors={['#FF9800', '#F44336']}
            start={{x: 1, y: 0}}
            end={{x: 0.2, y: 0}}
            style={tailwind('p-6 rounded-xl')}>
            <View style={tailwind('flex flex-row justify-between mb-4')}>
              <Text style={tailwind('text-white')}>账户金额</Text>
            </View>
            <View style={tailwind('flex flex-row justify-between items-end')}>
              <View style={tailwind('flex flex-row items-center')}>
                <Text style={tailwind('text-3xl text-white italic mr-1')}>
                  $
                </Text>
                <Text style={tailwind('text-3xl text-white font-bold')}>
                  321321
                </Text>
              </View>

              <View style={tailwind('flex flex-row items-center')}>
                <Icon
                  name="arrow-up"
                  size={20}
                  style={tailwind('text-white mr-1')}
                />
                <Text style={tailwind('text-lg text-white')}>23.33%</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View
          style={tailwind(
            'mt-8 mb-5 flex flex-row justify-between items-center',
          )}>
          <Text style={tailwind('text-xl text-gray-700')}>持仓</Text>
          <Text style={tailwind('text-base text-gray-500')}>交易记录</Text>
        </View>

        <LinearGradient
          colors={['#f2f3f4', '#f2f3f4']}
          style={tailwind('p-5 rounded-xl mb-3')}>
          <View style={tailwind('flex flex-row justify-between')}>
            <View style={tailwind('flex items-center flex-row')}>
              <Image
                source={require('../assets/img/btc.png')}
                style={tailwind('w-8 h-8 mr-3 rounded-full')}
              />
              <Text style={tailwind('text-gray-800 text-xl')}>BTC</Text>
            </View>
            <View style={tailwind('items-end')}>
              <Text style={tailwind('text-gray-600 text-base')}>33.12</Text>
              <View style={tailwind('flex flex-row items-center')}>
                <Text style={tailwind('text-gray-800 text-lg italic mr-1')}>
                  $
                </Text>
                <Text style={tailwind('text-gray-800 text-xl')}>321321</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#f2f3f4', '#f2f3f4']}
          style={tailwind('p-5 rounded-xl mb-3')}>
          <View style={tailwind('flex flex-row justify-between')}>
            <View style={tailwind('flex items-center flex-row')}>
              <Image
                source={require('../assets/img/eth.png')}
                style={tailwind('w-8 h-8 mr-3 rounded-full')}
              />
              <Text style={tailwind('text-gray-800 text-xl')}>ETH</Text>
            </View>
            <View style={tailwind('items-end')}>
              <Text style={tailwind('text-gray-600 text-sm')}>33.12</Text>
              <View style={tailwind('flex flex-row items-center')}>
                <Text style={tailwind('text-gray-800 text-lg italic mr-1')}>
                  $
                </Text>
                <Text style={tailwind('text-gray-800 text-lg')}>321321</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#f2f3f4', '#f2f3f4']}
          style={tailwind('p-5 rounded-xl mb-3')}>
          <View style={tailwind('flex flex-row justify-between')}>
            <View style={tailwind('flex items-center flex-row')}>
              <Image
                source={require('../assets/img/trx.png')}
                style={tailwind('w-8 h-8 mr-3 rounded-full')}
              />
              <Text style={tailwind('text-gray-800 text-xl')}>TRX</Text>
            </View>
            <View style={tailwind('items-end')}>
              <Text style={tailwind('text-gray-600 text-sm')}>33.12</Text>
              <View style={tailwind('flex flex-row items-center')}>
                <Text style={tailwind('text-gray-800 text-lg italic mr-1')}>
                  $
                </Text>
                <Text style={tailwind('text-gray-800 text-lg')}>321321</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default HomeScreen;
