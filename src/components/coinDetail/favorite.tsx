import React, {useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import {find} from 'lodash';
import {Toaster} from '@/utils';
import {useRoute} from '@react-navigation/native';
import {IconFavorite} from '@/components/icons';
import {ResponseCode} from '@/constants/enum';
import {styles, styleConfig} from '@/styles';

const CoinFavorite = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const coin: any = route.params;

  const {favorites: userFavorites} = useSelector((state: any) => state.coin);
  const loading = useSelector((state: any) => state.loading.models.coin);

  const favoriteStatus = useMemo(() => {
    const {symbol} = coin;

    if (!userFavorites || userFavorites.length === 0) {
      return false;
    }

    const favoriteItem = find(userFavorites, (item: any) => {
      return item.symbol === symbol;
    });

    return !!favoriteItem;
  }, [coin, userFavorites]);

  const handleFavoritePress = useCallback(() => {
    async function favoriteHandler() {
      const {symbol} = coin;
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
  }, [dispatch, coin, favoriteStatus]);

  const iconStyle =
    favoriteStatus === true
      ? styleConfig.color.yellow
      : styleConfig.color.gray_200;

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

export default CoinFavorite;
