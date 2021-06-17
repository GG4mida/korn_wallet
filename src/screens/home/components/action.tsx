import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  IconTabHome,
  IconTabCoin,
  IconTabDiscovery,
  IconTabNews,
} from '@/components/icons';
import {OperateScreen} from '@/screens';
import useTheme from '@/core/theme';

const HomeAction = () => {
  const {styleConfig, styles} = useTheme();
  const navigation = useNavigation();
  const {holds} = useSelector((state: any) => state.user);

  const handleOperatePress = useCallback(() => {
    navigation.navigate(OperateScreen.name);
  }, [navigation]);

  return (
    <View
      style={[
        styles.flex_container_between,
        styles.px_3,
        styles.py_3,
        styles.border_b,
        styles.mb_3,
        styles.bg_foreground,
      ]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => null}
        style={[styles.flex_col, styles.items_center]}>
        <IconTabHome width={24} height={24} fill={styleConfig.color.gray_600} />
        <Text style={[styles.text_sm, styles.text_content, styles.my_1]}>
          添加交易
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => null}
        style={[styles.flex_col, styles.items_center]}>
        <IconTabCoin width={24} height={24} fill={styleConfig.color.gray_600} />
        <Text style={[styles.text_sm, styles.text_content, styles.my_1]}>
          历史交易
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => null}
        style={[styles.flex_col, styles.items_center]}>
        <IconTabDiscovery
          width={24}
          height={24}
          fill={styleConfig.color.gray_600}
        />
        <Text style={[styles.text_sm, styles.text_content, styles.my_1]}>
          查看行情
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => null}
        style={[styles.flex_col, styles.items_center]}>
        <IconTabNews width={24} height={24} fill={styleConfig.color.gray_600} />
        <Text style={[styles.text_sm, styles.text_content, styles.my_1]}>
          我的自选
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeAction;
