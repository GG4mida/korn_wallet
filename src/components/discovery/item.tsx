import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles, styleConfig} from '@/styles';
import {IconForward} from '@/components/icons';

const DiscoveryItem = (props: any) => {
  const {colors, title, descr, handlePress, icon} = props;

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
      <LinearGradient
        colors={colors}
        start={{x: 1, y: 0}}
        end={{x: 0.2, y: 0}}
        style={[styles.p_5, styles.mb_4, styles.rounded_2xl]}>
        <View style={[styles.flex_container_between]}>
          <View style={[styles.flex_container_center]}>
            {icon}
            <View style={[styles.ml_3]}>
              <Text style={[styles.text_lg, styles.text_white]}>{title}</Text>
              <Text style={[styles.text_md, styles.text_light]}>{descr}</Text>
            </View>
          </View>
          <View>
            <IconForward
              width={18}
              height={18}
              fill={styleConfig.color.light}
            />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default DiscoveryItem;
