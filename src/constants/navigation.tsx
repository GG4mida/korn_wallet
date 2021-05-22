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
  Signup: {
    name: 'SIGNUP',
    title: '注册',
  },
  Splash: {
    name: 'SPLASH',
    title: '启动页',
  },
  Home: {
    name: 'HOME',
    title: '首页',
  },
  Wallet: {
    name: 'WALLET',
    title: '账户详情',
  },
  Operate: {
    name: 'OPERATE',
    title: '交易记录',
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
      component: () => <Icon name="home" size={18} color={iconColor} />,
    },
  },
  [RouteConfig.Ticker.name]: {
    label: RouteConfig.Ticker.title,
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="trending-up" size={18} color={iconColor} />,
    },
  },
  [RouteConfig.News.name]: {
    label: RouteConfig.News.title,
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="compass" size={18} color={iconColor} />,
    },
  },
  [RouteConfig.Profile.name]: {
    label: RouteConfig.Profile.title,
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="user" size={18} color={iconColor} />,
    },
  },
};

export {RouteConfig, RouteMain};
