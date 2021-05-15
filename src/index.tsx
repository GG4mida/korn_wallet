import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {Provider} from 'react-redux';
import {RootSiblingParent} from 'react-native-root-siblings';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ViewContainer from '@/components/container';
import HeaderHelper from '@/core/header';
import {RouteConfig, RouteMain} from '@/constants/navigation';
import Screen from '@/screens';
import {store} from '@/store';

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
      tabBar={props => (
        <AnimatedTabBar preset="flashy" tabs={RouteMain} {...props} />
      )}>
      <Tab.Screen name={RouteConfig.Home.name} component={Screen.HomeScreen} />
      <Tab.Screen
        name={RouteConfig.Ticker.name}
        component={Screen.TickerScreen}
      />
      <Tab.Screen name={RouteConfig.News.name} component={Screen.NewsScreen} />
      <Tab.Screen
        name={RouteConfig.Profile.name}
        component={Screen.ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootSiblingParent>
          <ViewContainer>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name={RouteConfig.Home.name}
                  component={MainTabs}
                  options={{title: RouteConfig.Home.title}}
                />
                <Stack.Screen
                  name={RouteConfig.Login.name}
                  component={Screen.LoginScreen}
                  options={{title: RouteConfig.Login.title}}
                />
                <Stack.Screen
                  name={RouteConfig.Startup.name}
                  component={Screen.StartupScreen}
                  options={{title: RouteConfig.Startup.title}}
                />
                <Stack.Screen
                  name={RouteConfig.Register.name}
                  component={Screen.RegisterScreen}
                  options={{title: RouteConfig.Register.title}}
                />
                <Stack.Screen
                  name={RouteConfig.TickerDetail.name}
                  component={Screen.TickerDetailScreen}
                  options={{title: RouteConfig.TickerDetail.title}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ViewContainer>
        </RootSiblingParent>
      </SafeAreaProvider>
    </Provider>
  );
}
