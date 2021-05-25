import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {tailwind} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';
import {WebView} from 'react-native-webview';

const Loading = () => {
  return (
    <View
      style={tailwind(
        'absolute top-0 right-0 bottom-0 left-0 items-center justify-center',
      )}>
      <ActivityIndicator />
    </View>
  );
};

const DiscoveryBrowserItemScreen = ({navigation}: any) => {
  const route = useRoute();
  const data: any = route.params;
  const {symbol} = data;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: symbol,
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, symbol]);

  const {explorer} = data;

  if (!explorer) {
    return (
      <View style={tailwind('flex-1')}>
        <Text style={tailwind('text-base text-gray-600')}>
          未获取到区块浏览器地址
        </Text>
      </View>
    );
  }

  return (
    <WebView
      source={{uri: explorer}}
      startInLoadingState={true}
      renderLoading={() => <Loading />}
    />
  );
};

export default DiscoveryBrowserItemScreen;
