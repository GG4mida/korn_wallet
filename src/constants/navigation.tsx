import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {getColor} from '@/core/tailwind';

const labelColor = getColor('pink-500');
const iconColor = getColor('pink-500');

const RouteConfig = {
  Login: {
    name: 'LOGIN',
    title: '登录',
  },
  Register: {
    name: 'REGISTER',
    title: '注册',
  },
  Startup: {
    name: 'STARTUP',
    title: '启动页',
  },
  Home: {
    name: 'HOME',
    title: '首页',
  },
  Ticker: {
    name: 'TICKER',
    title: '行情',
  },
  TickerDetail: {
    name: 'TICKER_DETAIL',
    title: '行情',
  },
  News: {
    name: 'NEWS',
    title: '资讯',
  },
  Profile: {
    name: 'PROFILE',
    title: '我',
  },
};

const RouteMain: any = {
  [RouteConfig.Home.name]: {
    label: RouteConfig.Home.title,
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="pocket" size={18} color={iconColor} />,
    },
  },
  [RouteConfig.Ticker.name]: {
    label: RouteConfig.Ticker.title,
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="pocket" size={18} color={iconColor} />,
    },
  },
  [RouteConfig.News.name]: {
    label: RouteConfig.News.title,
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="pocket" size={18} color={iconColor} />,
    },
  },
  [RouteConfig.Profile.name]: {
    label: RouteConfig.Profile.title,
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="pocket" size={18} color={iconColor} />,
    },
  },
};

export {RouteConfig, RouteMain};
