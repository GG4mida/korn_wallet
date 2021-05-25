import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import HeaderHelper from '@/core/header';
import {tailwind, getColor} from '@/core/tailwind';
import {RouteConfig} from '@/constants/navigation';
import Screen from '@/screens';
import {
  IconTabHome,
  IconTabNews,
  IconTabDiscovery,
  IconTabCoin,
} from '@/components/icons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = ({navigation, route}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: HeaderHelper.getHeaderTitle(route),
      headerRight: HeaderHelper.getHeaderRight(navigation, route),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const iconSize = 20;
          if (route.name === RouteConfig.Home.name) {
            return (
              <IconTabHome width={iconSize} height={iconSize} fill={color} />
            );
          }

          if (route.name === RouteConfig.Coin.name) {
            return (
              <IconTabCoin width={iconSize} height={iconSize} fill={color} />
            );
          }

          if (route.name === RouteConfig.News.name) {
            return (
              <IconTabNews width={iconSize} height={iconSize} fill={color} />
            );
          }

          if (route.name === RouteConfig.Discovery.name) {
            return (
              <IconTabDiscovery
                width={iconSize}
                height={iconSize}
                fill={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: styles.tab_container,
        tabStyle: tailwind('py-2'),
        labelStyle: tailwind('mt-1 text-xs'),
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
        name={RouteConfig.Setting.name}
        component={Screen.SettingScreen}
        options={{title: RouteConfig.Setting.title}}
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
        name={RouteConfig.DiscoveryBrowserItem.name}
        component={Screen.DiscoveryBrowserItemScreen}
        options={{title: RouteConfig.DiscoveryBrowserItem.title}}
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
  const {initialized} = useSelector((state: any) => state.system);
  if (initialized === false) {
    return null;
  }

  if (token && info && info.id) {
    return (
      <NavigationContainer>
        <AuthorizedRoutes />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <AnonymousRoutes />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tab_container: {
    height: 88,
    borderTopWidth: 1,
    borderTopColor: getColor('gray-50'),
  },
});

export default RouteContainer;
