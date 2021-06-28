import React, {useCallback} from 'react';
import {View, Linking} from 'react-native';
import HeaderBack from '@/components/header/back';
import {useTheme} from '@/hooks';
import {ScreenType} from '@/constants/enum';
import Version from '@/components/version';
import {Toaster, String} from '@/utils';
import {WebviewScreen} from '@/screens';
import {useSelector} from 'react-redux';
import Jumbo from '@/components/jumbo';
import {SettingAboutContent} from './components';

const SettingAboutScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, styleConfig]);

  const {info: systemInfo} = useSelector((state: any) => state.system);

  const {site_url, git_url, email} = systemInfo;

  const handleSitePress = useCallback(() => {
    const params = {
      title: '官方网站',
      url: site_url,
    };
    navigation.navigate(WebviewScreen.name, params);
  }, [navigation, site_url]);

  const handleGithubPress = useCallback(() => {
    const params = {
      title: 'Github',
      url: git_url,
    };
    navigation.navigate(WebviewScreen.name, params);
  }, [navigation, git_url]);

  const handleEmailPress = useCallback(async () => {
    const emailLink = `mailto:${email}`;
    const emailLinkSupported = await Linking.canOpenURL(emailLink).catch(() => {
      Toaster.show('打开邮件客户端失败');
    });

    if (emailLinkSupported) {
      await Linking.openURL(emailLink);
    } else {
      Toaster.show('打开邮件客户端失败');
    }
  }, [email]);

  const aboutItems = [];
  if (site_url) {
    aboutItems.push({
      name: '官方网站',
      isTail: true,
      handlePress: handleSitePress,
    });
  }

  if (git_url) {
    aboutItems.push({
      name: 'Github',
      isTail: true,
      handlePress: handleGithubPress,
    });
  }

  if (email) {
    aboutItems.push({
      name: '电子邮箱',
      value: email,
      isTail: false,
      handlePress: handleEmailPress,
    });
  }

  const aboutGroups = [aboutItems];

  return (
    <View style={[styles.screen_container]}>
      <View style={[styles.flex_1]}>
        <Jumbo />
        <SettingAboutContent data={aboutGroups} />
      </View>
      <Version />
    </View>
  );
};

export default {
  name: String.getUUID(),
  title: '关于我们',
  screen: SettingAboutScreen,
  type: [ScreenType.STACK],
};
