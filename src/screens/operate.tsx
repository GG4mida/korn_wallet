import React from 'react';
import {ScrollView, Text} from 'react-native';
import {tailwind} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';

const OperateScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tailwind('flex-1 bg-gray-50')}>
      <Text>Operate</Text>
    </ScrollView>
  );
};

export default OperateScreen;
