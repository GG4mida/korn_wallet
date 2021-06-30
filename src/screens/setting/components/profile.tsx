import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {IconForward} from '@/components/icons';
import {SettingProfileScreen} from '@/screens';
import {useTheme} from '@/hooks';

const SettingProfile = () => {
  const {styleConfig, styles} = useTheme();
  const navigation = useNavigation();
  const {info: userInfo} = useSelector((state: any) => state.user);
  const {nick_name, login_name, avatar} = userInfo;

  const handleProfilePress = useCallback(() => {
    navigation.navigate(SettingProfileScreen.name);
  }, [navigation]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handleProfilePress}
      style={[styles.bg_foreground, styles.px_4, styles.py_3, styles.mb_3]}>
      <View style={[styles.flex_container_between]}>
        <View style={[styles.flex_container_center]}>
          <Image
            source={{uri: avatar}}
            style={[styles.img_user, styles.mr_3, styles.rounded_full]}
          />
          <View>
            <Text
              style={[styles.text_md, styles.text_bold, styles.text_content]}>
              {nick_name}
            </Text>
            <Text style={[styles.text_md, styles.text_content_secondary]}>
              {login_name}
            </Text>
          </View>
        </View>
        <View>
          <IconForward width={18} height={18} fill={styleConfig.color.hint} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SettingProfile;
