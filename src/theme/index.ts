import * as DarkConfig from './config/dark';
import * as LightConfig from './config/light';
import getToolStyle from './tools';
import getCustomStyle from './custom';
import {ThemeType} from '@/constants/enum';

const getToolThemeStyle = (config: any) => {
  return getToolStyle(config);
};

const getStyle = (themeType: ThemeType) => {
  const config = themeType === ThemeType.LIGHT ? LightConfig : DarkConfig;
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
  const darkStyle = getStyle(ThemeType.DARK);
  const lightStyle = getStyle(ThemeType.LIGHT);
  return {
    [ThemeType.DARK]: darkStyle,
    [ThemeType.LIGHT]: lightStyle,
  };
};

export default getThemes();
