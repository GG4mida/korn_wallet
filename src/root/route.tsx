import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {useSelector} from 'react-redux';
import HeaderHelper from '@/core/header';
import {RouteConfig, RouteMain} from '@/constants/navigation';
import Screen from '@/screens';

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

const AuthorizedRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteConfig.Home.name}
        component={MainTabs}
        options={{title: RouteConfig.Home.title}}
      />

      <Stack.Screen
        name={RouteConfig.TickerDetail.name}
        component={Screen.TickerDetailScreen}
        options={{title: RouteConfig.TickerDetail.title}}
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
  const {base} = useSelector((state: any) => state.user);
  const {initialized} = useSelector((state: any) => state.system);
  if (initialized === false) {
    return null;
  }

  if (token && base && base.id) {
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

export default RouteContainer;
