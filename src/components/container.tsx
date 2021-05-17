import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const TIMER_INTERVAL = 3000;

const Container: React.FC = props => {
  const dispatch = useDispatch();

  const {all, favorites} = useSelector((state: any) => state.ticker);

  useEffect(() => {
    let tickerAllTimer: any = null;
    if (all && all.length) {
      tickerAllTimer = setInterval(() => {
        dispatch({
          type: 'ticker/all',
        });
      }, TIMER_INTERVAL);
    }

    let tickerFavoritesTimer: any = null;
    if (favorites && favorites.length) {
      tickerFavoritesTimer = setInterval(() => {
        dispatch({
          type: 'ticker/favorites',
        });
      }, TIMER_INTERVAL);
    }

    return () => {
      tickerAllTimer && clearInterval(tickerAllTimer);
      tickerFavoritesTimer && clearInterval(tickerFavoritesTimer);
    };
  }, [dispatch, all, favorites]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Container;
