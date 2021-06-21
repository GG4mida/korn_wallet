import React, {useCallback} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {SettingScreen} from '@/screens';
import useTheme from '@/core/theme';

const HeaderUser = (props: any) => {
  const {styles} = useTheme();
  const {navigation} = props;
  const {info: userInfo} = useSelector((state: any) => state.user);
  const {avatar} = userInfo;
  const handleItemPress = useCallback(() => {
    navigation.navigate(SettingScreen.name);
  }, [navigation]);

  return (
    <View style={[styles.px_4, styles.flex_container_center]}>
      <TouchableOpacity onPress={handleItemPress} activeOpacity={0.5}>
        <Image
          source={{uri: avatar}}
          style={[styles.rounded_full, styles.img_header]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderUser;
