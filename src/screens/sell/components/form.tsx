import React from 'react';
import {Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import useTheme from '@/core/theme';

interface IProps {
  value: number;
  handleChange: (val: number) => void;
}

const SellForm = (props: IProps) => {
  const {styleConfig, styles} = useTheme();
  const {value, handleChange} = props;
  return (
    <View style={[styles.mb_3]}>
      <View style={[styles.bg_foreground]}>
        <Text
          style={[
            styles.text_md,
            styles.text_content,
            styles.px_3,
            styles.my_2,
          ]}>
          卖出数量
        </Text>
        <Slider
          value={value}
          onValueChange={handleChange}
          step={1}
          style={[styles.mx_3]}
          tapToSeek={true}
          minimumValue={1}
          maximumValue={100}
          minimumTrackTintColor={styleConfig.color.green}
          maximumTrackTintColor={styleConfig.color.gray_300}
        />
      </View>
      <Text
        style={[styles.px_3, styles.my_2, styles.text_sm, styles.text_hint]}>
        拖动划块确定卖出数量。
      </Text>
    </View>
  );
};

export default SellForm;
