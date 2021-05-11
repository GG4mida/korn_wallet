import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {getColor} from '@/core/tailwind';

interface IProps {
  title: string;
  leftComponent?: any;
  rightComponent?: any;
}

const ScreenHeader = (props: IProps) => {
  const {
    title = '未指定标题',
    leftComponent = null,
    rightComponent = null,
  } = props;
  return (
    <Header
      statusBarProps={{barStyle: 'dark-content'}}
      barStyle="dark-content"
      leftComponent={leftComponent}
      centerComponent={{
        text: title,
        style: {color: getColor('gray-800'), fontSize: 16},
      }}
      rightComponent={rightComponent}
      containerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default ScreenHeader;
