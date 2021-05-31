import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import HeaderBack from '@/components/header/back';
import {WebView} from 'react-native-webview';
import {styles, styleConfig} from '@/styles';

const Loading = () => {
  return (
    <View style={[styles.absolute_fill, styles.flex_container_center]}>
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
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, symbol]);

  const {explorer} = data;

  if (!explorer) {
    return (
      <View style={[styles.flex_1, styles.flex_container_center]}>
        <Text style={[styles.text_md, styles.text_hint]}>未获取到地址信息</Text>
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
