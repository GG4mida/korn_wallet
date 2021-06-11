import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import HeaderHelper from '@/core/header';
import {RouteConfig} from '@/constants/navigation';
import Screen from '@/screens';
import useTheme from '@/core/theme';
import {ThemeType} from '@/constants/enum';
import {
  IconTabHome,
  IconTabNews,
  IconTabDiscovery,
  IconTabCoin,
} from '@/components/icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = ({navigation, route}: any) => {
  const {styleConfig, styles} = useTheme();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: HeaderHelper.getHeaderTitle(route),
      headerRight: HeaderHelper.getHeaderRight(navigation, route),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({route: routeInfo}) => ({
        tabBarIcon: ({color}) => {
          const ICON_SIZE = 20;
          if (routeInfo.name === RouteConfig.Home.name) {
            return (
              <IconTabHome width={ICON_SIZE} height={ICON_SIZE} fill={color} />
            );
          }

          if (routeInfo.name === RouteConfig.Coin.name) {
            return (
              <IconTabCoin width={ICON_SIZE} height={ICON_SIZE} fill={color} />
            );
          }

          if (routeInfo.name === RouteConfig.News.name) {
            return (
              <IconTabNews width={ICON_SIZE} height={ICON_SIZE} fill={color} />
            );
          }

          if (routeInfo.name === RouteConfig.Discovery.name) {
            return (
              <IconTabDiscovery
                width={ICON_SIZE}
                height={ICON_SIZE}
                fill={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: styleConfig.color.red,
        inactiveTintColor: styleConfig.color.gray_500,
        style: [styles.tab_container],
        tabStyle: [styles.py_2],
        labelStyle: [styles.text_sm, styles.mt_1],
      }}>
      <Tab.Screen
        name={RouteConfig.Home.name}
        component={Screen.HomeScreen}
        options={{title: RouteConfig.Home.title}}
      />
      <Tab.Screen
        name={RouteConfig.Coin.name}
        component={Screen.CoinScreen}
        options={{title: RouteConfig.Coin.title}}
      />
      <Tab.Screen
        name={RouteConfig.News.name}
        component={Screen.NewsScreen}
        options={{title: RouteConfig.News.title}}
      />
      <Tab.Screen
        name={RouteConfig.Discovery.name}
        component={Screen.DiscoveryScreen}
        options={{title: RouteConfig.Discovery.title}}
      />
    </Tab.Navigator>
  );
};

const AuthorizedRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteConfig.Home.name}
        component={MainTabs}
        options={{title: RouteConfig.Home.title}}
      />

      <Stack.Screen
        name={RouteConfig.CoinDetail.name}
        component={Screen.CoinDetailScreen}
        options={{title: RouteConfig.CoinDetail.title}}
      />

      <Stack.Screen
        name={RouteConfig.Wallet.name}
        component={Screen.WalletScreen}
        options={{title: RouteConfig.Wallet.title}}
      />

      <Stack.Screen
        name={RouteConfig.Operate.name}
        component={Screen.OperateScreen}
        options={{title: RouteConfig.Operate.title}}
      />

      <Stack.Screen
        name={RouteConfig.DiscoveryBrowser.name}
        component={Screen.DiscoveryBrowserScreen}
        options={{title: RouteConfig.DiscoveryBrowser.title}}
      />

      <Stack.Screen
        name={RouteConfig.DiscoveryTopic.name}
        component={Screen.DiscoveryTopicScreen}
        options={{title: RouteConfig.DiscoveryTopic.title}}
      />

      <Stack.Screen
        name={RouteConfig.DiscoveryTopicDetail.name}
        component={Screen.DiscoveryTopicDetailScreen}
        options={{title: RouteConfig.DiscoveryTopicDetail.title}}
      />

      <Stack.Screen
        name={RouteConfig.Setting.name}
        component={Screen.SettingScreen}
        options={{title: RouteConfig.Setting.title}}
      />

      <Stack.Screen
        name={RouteConfig.SettingHelp.name}
        component={Screen.SettingHelpScreen}
        options={{title: RouteConfig.SettingHelp.title}}
      />

      <Stack.Screen
        name={RouteConfig.SettingFeedback.name}
        component={Screen.SettingFeedbackScreen}
        options={{title: RouteConfig.SettingFeedback.title}}
      />

      <Stack.Screen
        name={RouteConfig.SettingProfile.name}
        component={Screen.SettingProfileScreen}
        options={{title: RouteConfig.SettingProfile.title}}
      />

      <Stack.Screen
        name={RouteConfig.SettingAbout.name}
        component={Screen.SettingAboutScreen}
        options={{title: RouteConfig.SettingAbout.title}}
      />

      <Stack.Screen
        name={RouteConfig.WebView.name}
        component={Screen.WebViewScreen}
        options={{title: RouteConfig.WebView.title}}
      />
    </Stack.Navigator>
  );
};

const AnonymousRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteConfig.Login.name}
        component={Screen.LoginScreen}
        options={{title: RouteConfig.Login.title}}
      />
      <Stack.Screen
        name={RouteConfig.Signup.name}
        component={Screen.SignupScreen}
        options={{title: RouteConfig.Signup.title}}
      />
    </Stack.Navigator>
  );
};

const RouteContainer = () => {
  const {token} = useSelector((state: any) => state.account);
  const {info} = useSelector((state: any) => state.user);
  const {initialized, theme} = useSelector((state: any) => state.system);

  if (initialized === false) {
    return null;
  }

  const navigationTheme = theme === ThemeType.DARK ? DarkTheme : DefaultTheme;

  if (token && info && info.id) {
    return (
      <NavigationContainer theme={navigationTheme}>
        <AuthorizedRoutes />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <AnonymousRoutes />
    </NavigationContainer>
  );
};

export default RouteContainer;
