import React from 'react';
import {Text, ScrollView} from 'react-native';
import HeaderBack from '@/components/header/back';
import {styles, styleConfig} from '@/styles';

const SettingFeedbackScreen = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.screen_container_with_padding]}>
      <Text>SettingFeedbackScreen</Text>
    </ScrollView>
  );
};

export default SettingFeedbackScreen;
