import React, {useLayoutEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {HeaderBack} from '@/components/header';
import {WebView} from 'react-native-webview';
import {useTheme} from '@/hooks';
import {ScreenType} from '@/constants/enum';
import {String} from '@/utils';

const WebViewLoading = () => {
  const {styles} = useTheme();
  return (
    <View style={[styles.absolute_fill, styles.flex_container_center]}>
      <ActivityIndicator />
    </View>
  );
};

const WebViewScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  const route = useRoute();
  const {title, url}: any = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, title, styleConfig]);
  if (!url) {
    return (
      <View style={[styles.flex_container_center_screen]}>
        <Text style={[styles.text_md, styles.text_hint]}>未获取到地址信息</Text>
      </View>
    );
  }
  return (
    <WebView
      source={{uri: url}}
      startInLoadingState={true}
      renderLoading={() => <WebViewLoading />}
    />
  );
};

export default {
  name: String.getUUID(),
  title: '浏览器',
  screen: WebViewScreen,
  type: [ScreenType.STACK],
};
