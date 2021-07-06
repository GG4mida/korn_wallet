import React, {useMemo, useLayoutEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import * as Screens from '@/screens';
import {useTheme} from '@/hooks';
import {ScreenType, ThemeType} from '@/constants/enum';
import {
  IconTabHome,
  IconTabNews,
  IconTabDiscovery,
  IconTabCoin,
} from '@/components/icons';

import HeaderHelper from './header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const getScreens = (screenType: ScreenType) => {
  const screens = [];
  for (const screen of Object.values(Screens)) {
    const {type} = screen;
    if (type && type.length > 0 && type.includes(screenType)) {
      screens.push(screen);
    }
  }
  return screens;
};

const MainTabs = ({navigation, route}: any) => {
  const {styleConfig, styles} = useTheme();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: HeaderHelper.getHeaderTitle(route),
      headerRight: HeaderHelper.getHeaderRight(navigation, route),
      headerLeft: HeaderHelper.getHeaderLeft(),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({route: routeInfo}) => ({
        tabBarIcon: ({color}) => {
          const ICON_SIZE = 20;
          let IconComponent = null;
          const {name: routeName} = routeInfo;
          if (routeName === Screens.HomeScreen.name) {
            IconComponent = IconTabHome;
          }
          if (routeName === Screens.CoinScreen.name) {
            IconComponent = IconTabCoin;
          }
          if (routeName === Screens.NewsScreen.name) {
            IconComponent = IconTabNews;
          }
          if (routeName === Screens.DiscoveryScreen.name) {
            IconComponent = IconTabDiscovery;
          }
          if (IconComponent) {
            return (
              <IconComponent
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
        style: [styles.border_t],
        labelStyle: [styles.text_sm],
      }}>
      <Tab.Screen
        name={Screens.HomeScreen.name}
        component={Screens.HomeScreen.screen}
        options={{title: Screens.HomeScreen.title}}
      />
      <Tab.Screen
        name={Screens.CoinScreen.name}
        component={Screens.CoinScreen.screen}
        options={{title: Screens.CoinScreen.title}}
      />
      <Tab.Screen
        name={Screens.NewsScreen.name}
        component={Screens.NewsScreen.screen}
        options={{title: Screens.NewsScreen.title}}
      />
      <Tab.Screen
        name={Screens.DiscoveryScreen.name}
        component={Screens.DiscoveryScreen.screen}
        options={{title: Screens.DiscoveryScreen.title}}
      />
    </Tab.Navigator>
  );
};

const AuthorizedRoutes = () => {
  const screens = useMemo(() => {
    return getScreens(ScreenType.STACK);
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.HomeScreen.name}
        component={MainTabs}
        options={{title: Screens.HomeScreen.title}}
      />
      {screens.map(item => {
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.screen}
            options={{
              title: item.title,
              cardStyleInterpolator: ({current}) => ({
                cardStyle: {
                  opacity: current.progress,
                },
              }),
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

const AnonymousRoutes = () => {
  const screens = useMemo(() => {
    return getScreens(ScreenType.NOAUTH);
  }, []);
  return (
    <Stack.Navigator>
      {screens.map(item => {
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.screen}
            options={{title: item.title}}
          />
        );
      })}
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
