import React, {useCallback} from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native';
import HeaderBack from '@/components/header/back';
import useTheme from '@/core/theme';
import LogoSvg from '@/assets/svg/logo.svg';
import {IconForward} from '@/components/icons';
import Version from '@/components/version';
import {Toaster} from '@/utils';
import {RouteConfig} from '@/constants/navigation';
import {useSelector} from 'react-redux';

const SettingAboutJumbo = () => {
  const {styles} = useTheme();
  return (
    <View
      style={[
        styles.flex_container_center,
        styles.flex_col,
        styles.py_5,
        styles.my_3,
      ]}>
      <LogoSvg width={64} height={64} />
      <Text
        style={[styles.text_lg, styles.mb_1, styles.mt_2, styles.text_leading]}>
        Korn
      </Text>
      <Text style={[styles.text_md, styles.text_content]}>
        Nothing else matters
      </Text>
    </View>
  );
};

const SettingAboutItems = (props: any) => {
  const {styleConfig, styles} = useTheme();
  const {data} = props;
  const {name, value, isTail} = data;
  return (
    <TouchableOpacity
      onPress={data.handlePress}
      activeOpacity={0.5}
      style={[
        styles.flex_container_between,
        styles.px_5,
        styles.py_3,
        styles.bg_foreground,
        styles.border_b,
      ]}>
      <View style={[styles.flex_container_center]}>
        <Text style={[styles.text_md, styles.text_content]}>{name}</Text>
      </View>
      <View style={[styles.flex_container_center]}>
        {value ? (
          <Text
            style={[
              styles.text_sm,
              styles.text_content_secondary,
              styles.mr_1,
            ]}>
            {value}
          </Text>
        ) : null}
        {isTail === true ? (
          <IconForward
            width={18}
            height={18}
            fill={styleConfig.color.content_secondary}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const SettingAboutGroup = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  return (
    <View style={[styles.mb_3]}>
      {data.map((item: any, index: number) => (
        <SettingAboutItems key={index} data={item} />
      ))}
    </View>
  );
};

const SettingAboutContent = (props: any) => {
  const {styles} = useTheme();
  const {data} = props;
  return (
    <View style={[styles.mb_3]}>
      {data.map((group: any, index: number) => (
        <SettingAboutGroup key={`setting_${index}`} data={group} />
      ))}
    </View>
  );
};

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
    navigation.navigate(RouteConfig.WebView.name, params);
  }, [navigation, site_url]);

  const handleGithubPress = useCallback(() => {
    const params = {
      title: 'Github',
      url: git_url,
    };
    navigation.navigate(RouteConfig.WebView.name, params);
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
        <SettingAboutJumbo />
        <SettingAboutContent data={aboutGroups} />
      </View>
      <Version />
    </View>
  );
};

export default SettingAboutScreen;
