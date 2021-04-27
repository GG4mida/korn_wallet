import React from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {Header} from 'react-native-elements';
import {tailwind} from '../core/tailwind';

const HeaderLeftComponent = ()=> {
  return (
    <View>
      <Icon name="menu"  size={18} color="#222" />
    </View>
  )
}

const HeaderRightComponent = ()=> {
  return (
    <View>
      <Icon name="maximize"  size={18} color="#222" />
    </View>
  )
}

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={tailwind('flex-1 bg-white')}>
      <Header
        statusBarProps={{barStyle: 'dark-content'}}
        barStyle="dark-content"
        leftComponent={<HeaderLeftComponent />}
        centerComponent={{text: '首页', style: {color: '#222', fontSize: 16}}}
        rightComponent={<HeaderRightComponent />}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      />
      <View style={tailwind('p-4')}>
        <View
          style={tailwind('bg-yellow-600 rounded-xl')}>
          <View style={tailwind('p-5')}>
            <View style={tailwind('flex flex-row justify-between mb-4')}>
              <Text style={tailwind('text-white')}>BTC</Text>
              <Icon name="more-vertical" size={18} color="#fff" />
            </View>
            <View style={tailwind('flex flex-row justify-between items-center')}>
              <Text style={tailwind('text-2xl text-white font-bold')}>
                ¥ 321321
              </Text>
              <Text style={tailwind('text-sm text-white')}>
                0.223131
              </Text>
            </View>
          </View>

          <View style={tailwind('bg-yellow-500 px-10 py-4 rounded-b-xl flex flex-row justify-between items-center')}>
            <View style={tailwind('flex flex-row items-center')}>
              <Icon name="navigation" size={16} style={tailwind('text-gray-100')}/>
              <Text style={tailwind('text-gray-100 text-sm ml-2')}>
                转账
              </Text>
            </View>

            <View style={tailwind('flex flex-row items-center')}>
              <Icon name="download" size={16} style={tailwind('text-gray-100')}/>
              <Text style={tailwind('text-gray-100 text-sm ml-2')}>
                收款
              </Text>
            </View>

            <View style={tailwind('flex flex-row items-center')}>
              <Icon name="trending-up" size={16} style={tailwind('text-gray-100')}/>
              <Text style={tailwind('text-gray-100 text-sm ml-2')}>
                行情
              </Text>
            </View>
          </View>
        </View>

        <View style={tailwind('flex flex-row justify-between items-center')}>
          <Text style={tailwind('text-xl my-5 text-gray-700')}>
            资产
          </Text>
          <Icon name="plus-circle" size={20} style={tailwind('text-gray-700')}/>
        </View>

        <LinearGradient
          colors={['#f2f3f4', '#f2f3f4']}
          style={tailwind('p-5 rounded-xl mb-3')}>
          <View style={tailwind('flex flex-row justify-between')}>
            <View style={tailwind('flex items-center flex-row')}>
              <Image source={require('../assets/img/btc.png')} style={tailwind('w-8 h-8 mr-3 rounded-full')}/>
              <Text style={tailwind('text-gray-800 text-xl')}>BTC</Text>
            </View>
            <View style={tailwind('items-end')}>
              <Text style={tailwind('text-gray-600 text-sm')}>
                2.331
              </Text>
              <Text style={tailwind('text-gray-800 text-xl')}>
                ¥ 321321
              </Text>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#f2f3f4', '#f2f3f4']}
          style={tailwind('p-5 rounded-xl mb-3')}>
          <View style={tailwind('flex flex-row justify-between')}>
            <View style={tailwind('flex items-center flex-row')}>
              <Image source={require('../assets/img/eth.png')} style={tailwind('w-8 h-8 mr-3 rounded-full')}/>
              <Text style={tailwind('text-gray-800 text-xl')}>ETH</Text>
            </View>
            <View style={tailwind('items-end')}>
              <Text style={tailwind('text-gray-600 text-sm')}>
                33.12
              </Text>
              <Text style={tailwind('text-gray-800 text-lg')}>
                ¥ 321321
              </Text>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#f2f3f4', '#f2f3f4']}
          style={tailwind('p-5 rounded-xl mb-3')}>
          <View style={tailwind('flex flex-row justify-between')}>
            <View style={tailwind('flex items-center flex-row')}>
              <Image source={require('../assets/img/trx.png')} style={tailwind('w-8 h-8 mr-3 rounded-full')}/>
              <Text style={tailwind('text-gray-800 text-xl')}>TRX</Text>
            </View>
            <View style={tailwind('items-end')}>
              <Text style={tailwind('text-gray-600  text-sm')}>
                89.321321
              </Text>
              <Text style={tailwind('text-gray-800 text-lg')}>
                ¥ 321321
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default HomeScreen;
