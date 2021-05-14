import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {Provider} from 'react-redux';
import {RootSiblingParent} from 'react-native-root-siblings';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import NavigationHelper from '@/core/navigation';
import TabHome from '@/constants/tabHome';
import Screen from '@/screens';
import {store} from '@/store';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const {Navigation, NavigationTabs} = TabHome;

const MainTabs = ({navigation, route}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: NavigationHelper.getHeaderTitle(route),
      headerRight: NavigationHelper.getHeaderRight(navigation, route),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      tabBar={props => (
        <AnimatedTabBar preset="flashy" tabs={NavigationTabs} {...props} />
      )}>
      <Tab.Screen name={Navigation.Home} component={Screen.HomeScreen} />
      <Tab.Screen name={Navigation.Ticker} component={Screen.TickerScreen} />
      <Tab.Screen name={Navigation.News} component={Screen.NewsScreen} />
      <Tab.Screen name={Navigation.Profile} component={Screen.ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootSiblingParent>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Screen.LoginScreen}
                options={{title: '登录'}}
              />
              <Stack.Screen
                name="Startup"
                component={Screen.StartupScreen}
                options={{title: '启动页'}}
              />
              <Stack.Screen
                name="Register"
                component={Screen.RegisterScreen}
                options={{title: '注册'}}
              />
              <Stack.Screen
                name="Home"
                component={MainTabs}
                options={{title: '首页'}}
              />
              <Stack.Screen
                name="Detail"
                component={Screen.TickerDetailScreen}
                options={{title: '详情'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </RootSiblingParent>
      </SafeAreaProvider>
    </Provider>
  );
}
