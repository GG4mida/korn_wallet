import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import TabHome from '@/constants/tabHome';
import HeaderHome from '@/components/header/home';
import HeaderTicker from '@/components/header/ticker';
import HeaderProfile from '@/components/header/profile';

const {Navigation} = TabHome;

const getHeaderTitle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? Navigation.Home;
  switch (routeName) {
    case Navigation.Home:
      return '首页';
    case Navigation.Ticker:
      return '行情';
    case Navigation.News:
      return '资讯';
    case Navigation.Profile:
      return '我';
    default:
      return '';
  }
};

const getHeaderRight = (navigation: any, route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? Navigation.Home;
  let headerRightComponent: any = null;
  switch (routeName) {
    case Navigation.Home:
      headerRightComponent = <HeaderHome navigation={navigation} />;
      break;
    case Navigation.Ticker:
      headerRightComponent = <HeaderTicker navigation={navigation} />;
      break;
    case Navigation.Profile:
      headerRightComponent = <HeaderProfile navigation={navigation} />;
      break;
    case Navigation.News:
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
