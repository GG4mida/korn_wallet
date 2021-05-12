import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {getColor} from '@/core/tailwind';

enum Navigation {
  Home = 'Home',
  Ticker = 'Ticker',
  News = 'News',
  Profile = 'Profile',
}

const labelColor = getColor('pink-500');
const iconColor = getColor('pink-500');

const NavigationTabs = {
  [Navigation.Home]: {
    label: '首页',
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="box" size={18} color={iconColor} />,
    },
  },
  [Navigation.Ticker]: {
    label: '行情',
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="pocket" size={18} color={iconColor} />,
    },
  },
  [Navigation.News]: {
    label: '资讯',
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="upload" size={18} color={iconColor} />,
    },
  },
  [Navigation.Profile]: {
    label: '我',
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: () => <Icon name="layers" size={18} color={iconColor} />,
    },
  },
};

export default {
  Navigation,
  NavigationTabs,
};
