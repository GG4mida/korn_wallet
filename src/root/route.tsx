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
import * as Screen from '@/screens';
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
          if (routeInfo.name === Screen.Home.name) {
            return (
              <IconTabHome width={ICON_SIZE} height={ICON_SIZE} fill={color} />
            );
          }
          if (routeInfo.name === Screen.Coin.name) {
            return (
              <IconTabCoin width={ICON_SIZE} height={ICON_SIZE} fill={color} />
            );
          }
          if (routeInfo.name === Screen.News.name) {
            return (
              <IconTabNews width={ICON_SIZE} height={ICON_SIZE} fill={color} />
            );
          }
          if (routeInfo.name === Screen.Discovery.name) {
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
        name={Screen.Home.name}
        component={Screen.Home.screen}
        options={{title: Screen.Home.title}}
      />
      <Tab.Screen
        name={Screen.Coin.name}
        component={Screen.Coin.screen}
        options={{title: Screen.Coin.title}}
      />
      <Tab.Screen
        name={Screen.News.name}
        component={Screen.News.screen}
        options={{title: Screen.News.title}}
      />
      <Tab.Screen
        name={Screen.Discovery.name}
        component={Screen.Discovery.screen}
        options={{title: Screen.Discovery.title}}
      />
    </Tab.Navigator>
  );
};

const AuthorizedRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.Home.name}
        component={MainTabs}
        options={{title: Screen.Home.title}}
      />

      <Stack.Screen
        name={Screen.CoinDetail.name}
        component={Screen.CoinDetail.screen}
        options={{title: Screen.CoinDetail.title}}
      />

      <Stack.Screen
        name={Screen.Wallet.name}
        component={Screen.Wallet.screen}
        options={{title: Screen.Wallet.title}}
      />

      <Stack.Screen
        name={Screen.Operate.name}
        component={Screen.Operate.screen}
        options={{title: Screen.Operate.title}}
      />

      <Stack.Screen
        name={Screen.DiscoveryBrowser.name}
        component={Screen.DiscoveryBrowser.screen}
        options={{title: Screen.DiscoveryBrowser.title}}
      />

      <Stack.Screen
        name={Screen.Topic.name}
        component={Screen.Topic.screen}
        options={{title: Screen.Topic.title}}
      />

      <Stack.Screen
        name={Screen.TopicDetail.name}
        component={Screen.TopicDetail.screen}
        options={{title: Screen.TopicDetail.title}}
      />

      <Stack.Screen
        name={Screen.Setting.name}
        component={Screen.Setting.screen}
        options={{title: Screen.Setting.title}}
      />

      <Stack.Screen
        name={Screen.SettingProfile.name}
        component={Screen.SettingProfile.screen}
        options={{title: Screen.SettingProfile.title}}
      />

      <Stack.Screen
        name={Screen.SettingAbout.name}
        component={Screen.SettingAbout.screen}
        options={{title: Screen.SettingAbout.title}}
      />

      <Stack.Screen
        name={Screen.Webview.name}
        component={Screen.Webview.screen}
        options={{title: Screen.Webview.title}}
      />
    </Stack.Navigator>
  );
};

const AnonymousRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.Signin.name}
        component={Screen.Signin.screen}
        options={{title: Screen.Signin.title}}
      />
      <Stack.Screen
        name={Screen.Signup.name}
        component={Screen.Signup.screen}
        options={{title: Screen.Signup.title}}
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
