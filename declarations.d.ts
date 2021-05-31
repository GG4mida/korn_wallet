declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'dva-core';
declare module 'dva-logger';
declare module 'lodash';
declare module 'dva-loading';
declare module 'react-native-svg-charts';
