import React from 'react';
import {Text, ScrollView} from 'react-native';
import {tailwind} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';

const SettingFeedbackScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <Text>SettingFeedbackScreen</Text>
    </ScrollView>
  );
};

export default SettingFeedbackScreen;
