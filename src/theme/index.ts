import * as DarkConfig from './theme/dark';
import * as LightConfig from './theme/light';
import getToolStyle from './tools';
import getCustomStyle from './custom';
import {ThemeType} from '@/constants/enum';

const getToolThemeStyle = (config: any) => {
  return getToolStyle(config);
};

const getStyle = (config: any) => {
  const toolStyle = getToolThemeStyle(config);
  const customStyle = getCustomStyle(toolStyle);
  return {
    styleConfig: config,
    styles: {
      ...toolStyle,
      ...customStyle,
    },
  };
};

const getThemes = () => {
  const darkStyle = getStyle(DarkConfig);
  const lightStyle = getStyle(LightConfig);
  return {
    [ThemeType.DARK]: darkStyle,
    [ThemeType.LIGHT]: lightStyle,
  };
};

export default getThemes();
