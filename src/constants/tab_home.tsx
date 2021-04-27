import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

enum Navigation {
  Home = 'Home',
  Market = 'Market',
  News = 'News',
  Profile = 'Profile',
  MarketDetail = 'MarketDetail'
};

const NavigationTabs = {
  [Navigation.Home]: {
    label: "首页",
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: ()=> <Icon name="box" size={18} color={'rgba(201,55,157,0.5)'} />,
    },
    background: {
      activeColor: 'rgba(255,255,255,1)',
    },
  },
  [Navigation.Market]: {
    label: "行情",
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: ()=> <Icon name="pocket" size={18} color={'rgba(201,55,157,0.5)'} />,
    },
    background: {
      activeColor: 'rgba(255,255,255,1)',
    },
  },
  [Navigation.MarketDetail]: {
    label: "详情",
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: ()=> <Icon name="compass" size={18} color={'rgba(201,55,157,0.5)'} />,
    },
    background: {
      activeColor: 'rgba(255,255,255,1)',
    },
  },
  [Navigation.News]: {
    label: "资讯",
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: ()=> <Icon name="upload" size={18} color={'rgba(201,55,157,0.5)'} />,
    },
    background: {
      activeColor: 'rgba(255,255,255,1)',
    },
  },
  [Navigation.Profile]: {
    label: "我",
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: ()=> <Icon name="layers" size={18} color={'rgba(201,55,157,0.5)'} />,
    },
    background: {
      activeColor: 'rgba(255,255,255,1)',
    },
  }
};

export default { 
  Navigation,
  NavigationTabs
}