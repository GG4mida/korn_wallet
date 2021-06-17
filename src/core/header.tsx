import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import * as Screens from '@/screens';
import {HeaderUser} from '@/components/header';

const getHeaderTitle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? Screens.Home.name;
  switch (routeName) {
    case Screens.Home.name:
      return Screens.Home.title;
    case Screens.Coin.name:
      return Screens.Coin.title;
    case Screens.News.name:
      return Screens.News.title;
    case Screens.Discovery.name:
      return Screens.Discovery.title;
    default:
      return '';
  }
};

const getHeaderRight = (navigation: any, route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? Screens.Home.name;
  let headerRightComponent: any = null;
  switch (routeName) {
    case Screens.Home.name:
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
