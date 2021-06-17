import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import * as Screens from '@/screens';
import {IconArrowRight} from '@/components/icons';
import useTheme from '@/core/theme';

const HomeSectionHeader = () => {
  const {styleConfig, styles} = useTheme();
  const navigation = useNavigation();
  const {holds} = useSelector((state: any) => state.user);

  const handleOperatePress = useCallback(() => {
    navigation.navigate(Screens.Operate.name);
  }, [navigation]);

  return (
    <View style={[styles.flex_container_between, styles.my_5]}>
      <Text style={[styles.text_lg, styles.text_content]}>持仓</Text>
      {holds && holds.length ? (
        <TouchableOpacity onPress={handleOperatePress} activeOpacity={0.5}>
          <IconArrowRight
            width={18}
            height={18}
            fill={styleConfig.color.content_secondary}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default HomeSectionHeader;
