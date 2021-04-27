import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Header} from 'react-native-elements';
import { WebView } from 'react-native-webview';
import {tailwind} from '../core/tailwind';
import { formatChange } from '../utils/formater';

const HeaderRightComponent = ()=> {
  return (
    <View>
      <Icon name="star"  size={18} color="#222" />
    </View>
  )
}

const Loading = ()=> {
  return (
    <View style={tailwind('absolute h-full w-full items-center justify-center')}>
        <ActivityIndicator />
    </View>
  )
}

const MarketDetailScreen = ({navigation}: any) => {
  return (
    <View style={tailwind('flex-1')}>
      <Header
        statusBarProps={{barStyle: 'dark-content'}}
        barStyle="dark-content"
        centerComponent={{text: '行情', style: {color: '#222', fontSize: 16}}}
        rightComponent={<HeaderRightComponent />}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      />
      <WebView 
        bounces={false}
        source={{ uri: 'https://m.mytokencap.com/currency/49653?language=zh_cn&legal_currency=cny&tt=1619494992' }} 
        startInLoadingState={true}
        renderLoading={() => <Loading />}/>
    </View>
  );
};

export default MarketDetailScreen;
