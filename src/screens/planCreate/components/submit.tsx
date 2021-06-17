import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import useTheme from '@/core/theme';

const PlanCreateSubmit = (props: any) => {
  const {styles} = useTheme();
  const {handlePress} = props;
  return (
    <View style={[styles.flex_container_center, styles.px_4]}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.5}>
        <Text style={[styles.text_md, styles.text_red]}>提交</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlanCreateSubmit;
