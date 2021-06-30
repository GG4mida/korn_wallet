import React, {useCallback} from 'react';
import {View} from 'react-native';
import {TabActions, useNavigation} from '@react-navigation/native';
import {
  IconActionAdd,
  IconActionHistory,
  IconActionOverview,
  IconActionFavorite,
} from '@/components/icons';
import {useTheme} from '@/hooks';
import {coinTab} from '@/constants/tab';
import {HistoryScreen, CoinScreen, OverViewScreen} from '@/screens';
import HomeActionItem from './actionItem';

const ICON_SIZE = 26;

const HomeAction = () => {
  const {styleConfig, styles} = useTheme();
  const navigation = useNavigation();

  const handleTradePress = useCallback(() => {
    const coinAction = TabActions.jumpTo(CoinScreen.name, {
      activeTab: coinTab.ALL,
    });
    navigation.dispatch(coinAction);
  }, [navigation]);

  const handleHistoryPress = useCallback(() => {
    navigation.navigate(HistoryScreen.name);
  }, [navigation]);

  const handleOverviewPress = useCallback(() => {
    navigation.navigate(OverViewScreen.name);
  }, [navigation]);

  const handleFavoritePress = useCallback(() => {
    const coinAction = TabActions.jumpTo(CoinScreen.name, {
      activeTab: coinTab.FAVORITES,
    });
    navigation.dispatch(coinAction);
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
          <IconActionAdd
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={styleConfig.color.gray_600}
          />
        }
        text="添加交易"
        handlePress={handleTradePress}
        bordered
      />
      <HomeActionItem
        icon={
          <IconActionHistory
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={styleConfig.color.gray_600}
          />
        }
        text="历史交易"
        handlePress={handleHistoryPress}
        bordered
      />
      <HomeActionItem
        icon={
          <IconActionFavorite
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={styleConfig.color.gray_600}
          />
        }
        text="我的自选"
        handlePress={handleFavoritePress}
      />
      <HomeActionItem
        icon={
          <IconActionOverview
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={styleConfig.color.gray_600}
          />
        }
        text="账户详情"
        handlePress={handleOverviewPress}
        bordered
      />
    </View>
  );
};

export default HomeAction;
