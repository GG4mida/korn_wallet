import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useTheme from '@/core/theme';
import {PlanScreen} from '@/screens';
import {IconPlan} from '@/components/icons';

const HeaderUser = ({navigation}: any) => {
  const {styles, styleConfig} = useTheme();

  const handlePress = useCallback(() => {
    navigation.navigate(PlanScreen.name);
  }, [navigation]);

  return (
    <View style={[styles.px_3, styles.flex_container_center]}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.5}
        style={[styles.flex_row, styles.items_center]}>
        <IconPlan width={20} height={20} fill={styleConfig.color.blue} />
        <Text style={[styles.text_blue, styles.text_md, styles.ml_1]}>
          默认方案
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderUser;
