import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {HomeScreen, CoinScreen, NewsScreen, DiscoveryScreen} from '@/screens';
import {HeaderUser, HeaderPlan} from '@/components/header';

const getHeaderTitle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? HomeScreen.name;
  switch (routeName) {
    case HomeScreen.name:
      return HomeScreen.title;
    case CoinScreen.name:
      return CoinScreen.title;
    case NewsScreen.name:
      return NewsScreen.title;
    case DiscoveryScreen.name:
      return DiscoveryScreen.title;
    default:
      return '';
  }
};

const getHeaderRight = (navigation: any, route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? HomeScreen.name;
  let headerRightComponent: any = null;
  switch (routeName) {
    case HomeScreen.name:
      headerRightComponent = <HeaderUser navigation={navigation} />;
      break;
    default:
      return null;
  }

  return () => headerRightComponent;
};

const getHeaderLeft = (navigation: any, route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? HomeScreen.name;
  let headerLeftComponent: any = null;
  switch (routeName) {
    case HomeScreen.name:
      headerLeftComponent = <HeaderPlan navigation={navigation} />;
      break;
    default:
      return null;
  }

  return () => headerLeftComponent;
};

export default {
  getHeaderTitle,
  getHeaderRight,
  getHeaderLeft,
};
