import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {RouteConfig} from '@/constants/navigation';
import {HeaderUser} from '@/components/header';

const getHeaderTitle = (route: any) => {
  const routeName =
    getFocusedRouteNameFromRoute(route) ?? RouteConfig.Home.name;
  switch (routeName) {
    case RouteConfig.Home.name:
      return RouteConfig.Home.title;
    case RouteConfig.Coin.name:
      return RouteConfig.Coin.title;
    case RouteConfig.News.name:
      return RouteConfig.News.title;
    case RouteConfig.Discovery.name:
      return RouteConfig.Discovery.title;
    default:
      return '';
  }
};

const getHeaderRight = (navigation: any, route: any) => {
  const routeName =
    getFocusedRouteNameFromRoute(route) ?? RouteConfig.Home.name;
  let headerRightComponent: any = null;
  switch (routeName) {
    case RouteConfig.Home.name:
      headerRightComponent = <HeaderUser navigation={navigation} />;
      break;
    default:
      return null;
  }

  return () => headerRightComponent;
};

export default {
  getHeaderTitle,
  getHeaderRight,
};
