import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {RouteConfig} from '@/constants/navigation';
import HeaderHome from '@/components/header/home';
import HeaderTicker from '@/components/header/ticker';
import HeaderProfile from '@/components/header/profile';

const getHeaderTitle = (route: any) => {
  const routeName =
    getFocusedRouteNameFromRoute(route) ?? RouteConfig.Home.name;
  switch (routeName) {
    case RouteConfig.Home.name:
      return RouteConfig.Home.title;
    case RouteConfig.Ticker.name:
      return RouteConfig.Ticker.title;
    case RouteConfig.News.name:
      return RouteConfig.News.title;
    case RouteConfig.Profile.name:
      return RouteConfig.Profile.title;
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
      headerRightComponent = <HeaderHome navigation={navigation} />;
      break;
    case RouteConfig.Ticker.name:
      headerRightComponent = <HeaderTicker navigation={navigation} />;
      break;
    case RouteConfig.Profile.name:
      headerRightComponent = <HeaderProfile navigation={navigation} />;
      break;
    case RouteConfig.News.name:
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
