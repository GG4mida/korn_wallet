import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useTheme from '@/core/theme';

import {RouteConfig} from '@/constants/navigation';
import {IconArrowDownSolid} from '@/components/icons';

const HeaderUser = ({navigation}: any) => {
  const {styles, styleConfig} = useTheme();

  const handlePress = useCallback(() => {
    navigation.navigate(RouteConfig.Plan.name);
  }, [navigation]);

  return (
    <View style={[styles.px_4, styles.flex_container_center]}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.5}
        style={[styles.flex_row, styles.items_center]}>
        <Text style={[styles.text_content, styles.text_md]}>默认方案</Text>
        <IconArrowDownSolid
          width={18}
          height={18}
          fill={styleConfig.color.content_secondary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderUser;
