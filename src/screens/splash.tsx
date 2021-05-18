import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Storage} from '@/utils';
import {StorageKeys, ResponseCode} from '@/constants/enum';
import {tailwind} from '@/core/tailwind';

const SHOW_DURATION = 2500;

const SplashScreen = ({}: any) => {
  const dispatch = useDispatch();
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
            payload: {
              data: userToken,
            },
          });
        }
      }

      const systemInfoRes: any = await dispatch({
        type: 'system/info',
      });

      if (systemInfoRes.code === ResponseCode.SUCCESS) {
        const setInitialized = () => {
          dispatch({
            type: 'system/setInitialized',
            payload: {
              data: true,
            },
          });
        };

        initTimer = setTimeout(() => {
          setInitialized();
        }, SHOW_DURATION);
      }
    }

    fetchData();

    return () => {
      initTimer && clearTimeout(initTimer);
    };
  }, [dispatch]);

  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <View style={tailwind('py-4 flex flex-row justify-center')}>
        <Text>这是启动页</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
