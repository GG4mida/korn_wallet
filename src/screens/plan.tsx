import React from 'react';
import {ScrollView} from 'react-native';
import HeaderBack from '@/components/header/back';
import {PlanList, PlanCreate} from '@/components/plan';
import useTheme from '@/core/theme';

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

export default PlanScreen;
