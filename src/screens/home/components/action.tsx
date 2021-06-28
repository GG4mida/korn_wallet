import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  IconTabHome,
  IconTabCoin,
  IconTabDiscovery,
  IconTabNews,
} from '@/components/icons';
import {useTheme} from '@/hooks';
import {HistoryScreen} from '@/screens';
import HomeActionItem from './actionItem';

const HomeAction = () => {
  const {styleConfig, styles} = useTheme();
  const navigation = useNavigation();

  const handleTradePress = useCallback(() => {
    navigation.navigate(HistoryScreen.name);
  }, [navigation]);

  const handleHistoryPress = useCallback(() => {
    navigation.navigate(HistoryScreen.name);
  }, [navigation]);

  const handleCoinPress = useCallback(() => {
    navigation.navigate(HistoryScreen.name);
  }, [navigation]);

  const handleFavoritePress = useCallback(() => {
    navigation.navigate(HistoryScreen.name);
  }, [navigation]);

  return (
    <View
      style={[
        styles.flex_container_between,
        styles.py_3,
        styles.my_2,
        styles.bg_foreground,
      ]}>
      <HomeActionItem
        icon={
          <IconTabHome
            width={24}
            height={24}
            fill={styleConfig.color.gray_600}
          />
        }
        text="添加交易"
        handlePress={handleTradePress}
        bordered
      />
      <HomeActionItem
        icon={
          <IconTabCoin
            width={24}
            height={24}
            fill={styleConfig.color.gray_600}
          />
        }
        text="历史交易"
        handlePress={handleHistoryPress}
        bordered
      />
      <HomeActionItem
        icon={
          <IconTabDiscovery
            width={24}
            height={24}
            fill={styleConfig.color.gray_600}
          />
        }
        text="查看行情"
        handlePress={handleCoinPress}
        bordered
      />
      <HomeActionItem
        icon={
          <IconTabNews
            width={24}
            height={24}
            fill={styleConfig.color.gray_600}
          />
        }
        text="我的自选"
        handlePress={handleFavoritePress}
      />
    </View>
  );
};

export default HomeAction;
