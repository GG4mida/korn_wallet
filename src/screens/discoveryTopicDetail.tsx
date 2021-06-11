import React from 'react';
import {View, Text} from 'react-native';
import useTheme from '@/core/theme';
import HeaderBack from '@/components/header/back';

const DiscoveryTopicDetailScreen = ({navigation, route}: any) => {
  const {styles, styleConfig} = useTheme();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, styleConfig]);

  const data: any = route.params;

  console.info(data);

  return (
    <View style={styles.screen_container}>
      <Text>detail</Text>
    </View>
  );
};

export default DiscoveryTopicDetailScreen;
