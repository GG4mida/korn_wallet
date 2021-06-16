import React from 'react';
import {View, Text} from 'react-native';
import HeaderBack from '@/components/header/back';
import {PlanCreate} from '@/components/plan';
import useTheme from '@/core/theme';

const PlanCreateScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <PlanCreate handlePress={() => null} />,
    });
  }, [navigation, styleConfig]);

  return (
    <View style={[styles.screen_container]}>
      <Text>创建</Text>
    </View>
  );
};

export default PlanCreateScreen;
