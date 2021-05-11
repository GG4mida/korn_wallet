import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import TabHome from './constants/tab_home';
import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';
import NewsScreen from './screens/news';
import MarketScreen from './screens/market';
import MarketDetailScreen from './screens/market_detail';

const Tab = createBottomTabNavigator();
const {Navigation, NavigationTabs} = TabHome;

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => (
            <AnimatedTabBar preset="flashy" tabs={NavigationTabs} {...props} />
          )}>
          <Tab.Screen name={Navigation.Home} component={HomeScreen} />
          <Tab.Screen name={Navigation.Market} component={MarketScreen} />
          <Tab.Screen
            name={Navigation.MarketDetail}
            component={MarketDetailScreen}
          />
          <Tab.Screen name={Navigation.News} component={NewsScreen} />
          <Tab.Screen name={Navigation.Profile} component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
