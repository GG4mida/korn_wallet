import React from 'react';
import {ScrollView} from 'react-native';
import HeaderBack from '@/components/header/back';
import useTheme from '@/core/theme';
import {String} from '@/utils';
import {ScreenType} from '@/constants/enum';
import {PlanList, PlanCreate} from './components';

const PlanScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <PlanCreate handlePress={() => null} />,
    });
  }, [navigation, styleConfig]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.screen_container]}>
      <PlanList />
    </ScrollView>
  );
};

export default {
  name: String.getUUID(),
  title: '组合列表',
  screen: PlanScreen,
  type: [ScreenType.STACK],
};
