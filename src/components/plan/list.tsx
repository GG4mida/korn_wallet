import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {IconDetete} from '@/components/icons';
import useTheme from '@/core/theme';

const PlanItem = (props: any) => {
  const [checked, setChecked] = useState(false);
  const {styles, styleConfig} = useTheme();
  const handleCheckedChange = useCallback((checkStatus: any) => {
    setChecked(checkStatus);
  }, []);
  return (
    <View
      style={[
        styles.flex_row,
        styles.items_center,
        styles.justify_between,
        styles.px_3,
        styles.py_2,
        styles.border_b,
      ]}>
      <View>
        <Text style={[styles.text_md, styles.text_content, styles.mb_1]}>
          方案名称
        </Text>
        <View style={[styles.flex_row, styles.items_center]}>
          <Image
            source={{uri: 'http://127.0.0.1:7070/public/coin/btc.png'}}
            style={[customStyle.icon_list, customStyle.icon_first]}
          />
          <Image
            source={{uri: 'http://127.0.0.1:7070/public/coin/eth.png'}}
            style={[customStyle.icon_list]}
          />
          <Image
            source={{uri: 'http://127.0.0.1:7070/public/coin/doge.png'}}
            style={[customStyle.icon_list]}
          />
          <Text
            style={[
              styles.text_sm,
              styles.text_content_secondary,
              styles.ml_1,
            ]}>
            共3支持仓
          </Text>
        </View>
      </View>
      <View style={[styles.flex_container_center]}>
        <Switch
          trackColor={{
            false: styleConfig.color.gray_100,
            true: styleConfig.color.green,
          }}
          thumbColor={styleConfig.color.white}
          ios_backgroundColor={styleConfig.color.gray_200}
          onValueChange={handleCheckedChange}
          value={checked}
        />
        <TouchableOpacity activeOpacity={0.5} onPress={() => null}>
          <IconDetete
            width={20}
            height={20}
            fill={styleConfig.color.hint}
            style={[styles.ml_3]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PlanList = () => {
  const {styles} = useTheme();
  return (
    <View style={[styles.my_3, styles.bg_foreground]}>
      <PlanItem />
      <PlanItem />
      <PlanItem />
      <PlanItem />
    </View>
  );
};

const customStyle = StyleSheet.create({
  icon_first: {
    marginLeft: 0,
  },
  icon_list: {
    width: 24,
    height: 24,
    marginLeft: -8,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 999,
  },
});

export default PlanList;
