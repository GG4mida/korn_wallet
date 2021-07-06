import React, {useState, useCallback} from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeType, StorageKeys} from '@/constants/enum';
import {useTheme} from '@/hooks';
import {Storage} from '@/utils';

const SettingTheme = () => {
  const dispatch = useDispatch();
  const {theme: themeType} = useSelector((state: any) => state.system);
  const defaultChecked = themeType === ThemeType.DARK;
  const [checked, setChecked] = useState(defaultChecked);
  const {styleConfig, styles} = useTheme();

  const handleCheckedChange = useCallback(
    (checkStatus: any) => {
      const theme = checkStatus === true ? ThemeType.DARK : ThemeType.LIGHT;
      dispatch({
        type: 'system/setTheme',
        payload: {
          theme,
        },
      });
      Storage.setItem(StorageKeys.THEME_TYPE, theme);
      setChecked(checkStatus);
    },
    [dispatch],
  );

  return (
    <TouchableOpacity
      onPress={() => null}
      activeOpacity={0.5}
      style={[
        styles.flex_container_between,
        styles.px_4,
        styles.py_3,
        styles.mb_3,
        styles.bg_foreground,
        styles.border_b,
      ]}>
      <View style={[styles.flex_container_center]}>
        <Text style={[styles.text_md, styles.text_content]}>暗黑模式</Text>
      </View>
      <View>
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
      </View>
    </TouchableOpacity>
  );
};

export default SettingTheme;
