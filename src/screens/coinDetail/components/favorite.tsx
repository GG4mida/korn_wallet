import React, {useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import {find} from 'lodash';
import {Toaster} from '@/utils';
import {useRoute} from '@react-navigation/native';
import {IconFavorite} from '@/components/icons';
import {ResponseCode} from '@/constants/enum';
import {useTheme} from '@/hooks';

const CoinDetailFavorite = () => {
  const {styleConfig, styles} = useTheme();
  const dispatch = useDispatch();
  const route = useRoute();
  const {symbol}: any = route.params;
  const {favorites: userFavorites} = useSelector((state: any) => state.coin);
  const loading = useSelector((state: any) => state.loading.models.coin);

  const favoriteStatus = useMemo(() => {
    if (!userFavorites || userFavorites.length === 0) {
      return false;
    }
    const favoriteItem = find(userFavorites, (item: any) => {
      return item.symbol === symbol;
    });
    return !!favoriteItem;
  }, [symbol, userFavorites]);

  const handleFavoritePress = useCallback(() => {
    async function favoriteHandler() {
      const dispatchType =
        favoriteStatus === true ? 'coin/delFavorite' : 'coin/addFavorite';
      const favoriteRes: any = await dispatch({
        type: dispatchType,
        payload: {
          coin: symbol,
        },
      });
      const {code, content} = favoriteRes;
      if (code === ResponseCode.SUCCESS) {
        Toaster.show(content);
        await dispatch({
          type: 'coin/favorites',
        });
      }
    }
    favoriteHandler();
  }, [dispatch, symbol, favoriteStatus]);

  const iconStyle =
    favoriteStatus === true
      ? styleConfig.color.yellow
      : styleConfig.color.gray_300;

  return (
    <View style={[styles.flex_container_center, styles.px_4]}>
      <TouchableOpacity
        disabled={loading}
        onPress={handleFavoritePress}
        activeOpacity={0.5}>
        <IconFavorite width={20} height={20} fill={iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default CoinDetailFavorite;
