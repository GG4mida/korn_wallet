import React, {useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import {find} from 'lodash';
import {Toaster} from '@/utils';
import {tailwind, getColor} from '@/core/tailwind';
import {useRoute} from '@react-navigation/native';
import {IconFavorite} from '@/components/icons';
import {ResponseCode} from '@/constants/enum';

const TickerFavorite = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const ticker: any = route.params;

  const {favorites} = useSelector((state: any) => state.ticker);
  const loading = useSelector((state: any) => state.loading.models.ticker);

  const favoriteStatus = useMemo(() => {
    const {
      basic: {symbol},
    } = ticker;
    if (!favorites || favorites.length === 0) {
      return false;
    }

    const favoriteItem = find(favorites, (item: any) => {
      return item.basic.symbol === symbol;
    });

    return !!favoriteItem;
  }, [ticker, favorites]);

  const handleFavoritePress = useCallback(() => {
    async function favoriteHandler() {
      const {
        basic: {symbol},
      } = ticker;
      const dispatchType =
        favoriteStatus === true ? 'ticker/delFavorite' : 'ticker/addFavorite';
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
          type: 'ticker/favorites',
        });
      }
    }

    favoriteHandler();
  }, [dispatch, ticker, favoriteStatus]);

  const iconStyle =
    favoriteStatus === true ? getColor('yellow-400') : getColor('gray-300');

  return (
    <View style={tailwind('flex flex-row items-center px-5')}>
      <TouchableOpacity
        disabled={loading}
        onPress={handleFavoritePress}
        activeOpacity={0.5}>
        <IconFavorite width={20} height={20} fill={iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default TickerFavorite;
