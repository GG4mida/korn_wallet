import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {RouteConfig} from '@/constants/navigation';
import HeaderHome from '@/components/header/home';
import HeaderCoin from '@/components/header/coin';
import HeaderNews from '@/components/header/news';
import HeaderDiscovery from '@/components/header/discovery';

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
      headerRightComponent = <HeaderHome navigation={navigation} />;
      break;
    case RouteConfig.Coin.name:
      headerRightComponent = <HeaderCoin navigation={navigation} />;
      break;
    case RouteConfig.News.name:
      headerRightComponent = <HeaderNews navigation={navigation} />;
      break;
    case RouteConfig.Discovery.name:
      headerRightComponent = <HeaderDiscovery navigation={navigation} />;
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
