import React from 'react';
import {Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {useTheme} from '@/hooks';

interface IProps {
  value: number;
  handleChange: (val: number) => void;
}

const BuyInForm = (props: IProps) => {
  const {styleConfig, styles} = useTheme();
  const {value, handleChange} = props;
  return (
    <View style={[styles.mb_3]}>
      <View style={[styles.bg_foreground, styles.py_2]}>
        <View style={[styles.flex_container_between, styles.px_4, styles.mb_2]}>
          <Text style={[styles.text_md, styles.text_content]}>买入金额</Text>
          <Text
            style={[styles.text_md, styles.text_content]}>{`${value}%`}</Text>
        </View>
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
        style={[styles.px_4, styles.my_2, styles.text_sm, styles.text_hint]}>
        拖动划块确定买入金额。
      </Text>
    </View>
  );
};

export default BuyInForm;
