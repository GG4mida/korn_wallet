import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {Storage} from '@/utils';
import {StorageKeys, ResponseCode} from '@/constants/enum';

const TIMER_INTERVAL = 500000; // TODO: 5000
const SPLASH_INTERVAL = 2000;

const Container: React.FC = props => {
  const dispatch = useDispatch();
  const {all, favorites} = useSelector((state: any) => state.ticker);
  const {base} = useSelector((state: any) => state.user);

  useEffect(() => {
    let tickerAllTimer: any = null;
    let tickerFavoritesTimer: any = null;

    async function fetchTicker() {
      if (!base || !base.id) {
        return;
      }

      if (all && all.length) {
        tickerAllTimer = setInterval(() => {
          dispatch({
            type: 'ticker/all',
          });
        }, TIMER_INTERVAL);
      }

      if (favorites && favorites.length) {
        tickerFavoritesTimer = setInterval(() => {
          dispatch({
            type: 'ticker/favorites',
          });
        }, TIMER_INTERVAL);
      }
    }

    fetchTicker();

    return () => {
      tickerAllTimer && clearInterval(tickerAllTimer);
      tickerFavoritesTimer && clearInterval(tickerFavoritesTimer);
    };
  }, [dispatch, all, favorites, base]);

  useEffect(() => {
    let initTimer: any = null;
    async function fetchData() {
      const userToken = await Storage.getItem(StorageKeys.USER_TOKEN);

      if (userToken) {
        const userBaseRes: any = await dispatch({
          type: 'user/base',
        });
        if (userBaseRes.code === ResponseCode.SUCCESS) {
          await dispatch({
            type: 'account/setToken',
            payload: userToken,
          });
        } else {
          Storage.removeItem(StorageKeys.USER_TOKEN);
        }
      }

      const systemInfoRes: any = await dispatch({
        type: 'system/info',
      });

      if (systemInfoRes.code === ResponseCode.SUCCESS) {
        const setInitialized = async () => {
          await dispatch({
            type: 'system/setInitialized',
            payload: true,
          });

          SplashScreen.hide();
        };

        initTimer = setTimeout(() => {
          setInitialized();
        }, SPLASH_INTERVAL);
      }
    }

    fetchData();

    return () => {
      initTimer && clearTimeout(initTimer);
    };
  }, [dispatch]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Container;
