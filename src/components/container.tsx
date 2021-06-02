import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {Storage} from '@/utils';
import {StorageKeys, ResponseCode, ThemeType} from '@/constants/enum';

const TIMER_INTERVAL = 500000;
const SPLASH_INTERVAL = 2000;

const Container: React.FC = props => {
  const dispatch = useDispatch();
  const {info: userInfo} = useSelector((state: any) => state.user);
  const {theme} = useSelector((state: any) => state.system);

  useEffect(() => {
    let marketTimer: any = null;
    async function fetchMarket() {
      if (!userInfo || !userInfo.id) {
        return;
      }
      const handler = () => {
        dispatch({
          type: 'market/get',
        });

        dispatch({
          type: 'exchange/get',
        });
      };
      handler();
      marketTimer = setInterval(handler, TIMER_INTERVAL);
    }

    fetchMarket();
    return () => {
      marketTimer && clearInterval(marketTimer);
    };
  }, [dispatch, userInfo]);

  useEffect(() => {
    let initTimer: any = null;
    async function fetchData() {
      const userToken = await Storage.getItem(StorageKeys.USER_TOKEN);
      if (userToken) {
        const userInfoRes: any = await dispatch({
          type: 'user/info',
        });
        if (userInfoRes.code === ResponseCode.SUCCESS) {
          await dispatch({
            type: 'account/setToken',
            payload: userToken,
          });
        } else {
          Storage.removeItem(StorageKeys.USER_TOKEN);
        }
      }

      const themeType = await Storage.getItem(StorageKeys.THEME_TYPE);
      if (themeType) {
        await dispatch({
          type: 'system/setTheme',
          payload: {
            theme: themeType,
          },
        });
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

  const statusBarTheme =
    theme === ThemeType.DARK ? 'light-content' : 'dark-content';

  return (
    <React.Fragment>
      <StatusBar animated={true} barStyle={statusBarTheme} />
      {props.children}
    </React.Fragment>
  );
};

export default Container;
