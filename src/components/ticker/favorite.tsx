import React, {useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import {find} from 'lodash';
import {tailwind, getColor} from '@/core/tailwind';
import {useRoute} from '@react-navigation/native';
import FavoriteSolidSvg from '@/assets/svg/favorite.svg';
import FavoriteSvg from '@/assets/svg/favorite-o.svg';

const TickerFavorite = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const ticker: any = route.params;

  const {favorites} = useSelector((state: any) => state.ticker);

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
    const {
      basic: {symbol},
    } = ticker;
    const dispatchType =
      favoriteStatus === true ? 'ticker/delFavorite' : 'ticker/addFavorite';
    dispatch({
      type: dispatchType,
      payload: {
        coin: symbol,
      },
    });
  }, [dispatch, ticker, favoriteStatus]);

  let iconComponent = null;
  if (favoriteStatus === true) {
    iconComponent = (
      <FavoriteSolidSvg width={20} height={20} fill={getColor('yellow-400')} />
    );
  } else {
    iconComponent = (
      <FavoriteSvg width={20} height={20} fill={getColor('gray-600')} />
    );
  }

  return (
    <View style={tailwind('flex flex-row items-center px-5')}>
      <TouchableOpacity onPress={handleFavoritePress} activeOpacity={0.5}>
        {iconComponent}
      </TouchableOpacity>
    </View>
  );
};

export default TickerFavorite;
