import React, {useState} from 'react';
import {View} from 'react-native';
import HeaderBack from '@/components/header/back';
import useTheme from '@/core/theme';
import {String} from '@/utils';
import {ScreenType} from '@/constants/enum';
import {PlanCreateSubmit, PlanCreateName} from './components';

const PlanCreateScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();

  const [name, setName] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <PlanCreateSubmit handlePress={() => null} />,
    });
  }, [navigation, styleConfig]);

  return (
    <View style={[styles.screen_container]}>
      <View style={[styles.my_4]}>
        <PlanCreateName value={name} onChange={setName} />
      </View>
    </View>
  );
};

export default {
  name: String.getUUID(),
  title: '组合创建',
  screen: PlanCreateScreen,
  type: [ScreenType.STACK],
};
