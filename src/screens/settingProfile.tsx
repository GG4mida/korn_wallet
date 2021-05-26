import React from 'react';
import {Text, ScrollView} from 'react-native';
import {tailwind} from '@/core/tailwind';
import HeaderBack from '@/components/header/back';

const SettingProfileScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-blue-600'),
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <Text>SettingProfileScreen</Text>
    </ScrollView>
  );
};

export default SettingProfileScreen;
