import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import HeaderBack from '@/components/header/back';
import useTheme from '@/core/theme';
import {String} from '@/utils';
import {PlanCreateScreen} from '@/screens';
import {ScreenType} from '@/constants/enum';
import {PlanList, PlanCreate} from './components';

const PlanScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();

  const handleCreatePress = useCallback(() => {
    navigation.navigate(PlanCreateScreen.name);
  }, [navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <PlanCreate handlePress={handleCreatePress} />,
    });
  }, [navigation, styleConfig, handleCreatePress]);

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
