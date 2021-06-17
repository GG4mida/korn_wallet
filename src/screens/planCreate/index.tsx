import React from 'react';
import {View, Text} from 'react-native';
import HeaderBack from '@/components/header/back';
import useTheme from '@/core/theme';
import {String} from '@/utils';
import {ScreenType} from '@/constants/enum';
import {PlanCreateSubmit} from './components';

const PlanCreateScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <PlanCreateSubmit handlePress={() => null} />,
    });
  }, [navigation, styleConfig]);

  return (
    <View style={[styles.screen_container]}>
      <Text>创建</Text>
    </View>
  );
};

export default {
  name: String.getUUID(),
  title: '组合创建',
  screen: PlanCreateScreen,
  type: [ScreenType.STACK],
};
