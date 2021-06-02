import getBorderStyle from './border';
import getFlexStyle from './flex';
import getMarginStyle from './margin';
import getPaddingStyle from './padding';
import getRoundedStyle from './rounded';
import getSizeStyle from './size';
import getTextStyle from './text';
import getImageStyle from './image';
import getButtonStyle from './button';
import getFormStyle from './form';
import getPositionStyle from './position';
import getBackgroundStyle from './background';

const getToolStyle = (config: any) => {
  const borderStyle = getBorderStyle(config);
  const flexStyle = getFlexStyle();
  const marginStyle = getMarginStyle(config);
  const paddingStyle = getPaddingStyle(config);
  const sizeStyle = getSizeStyle();
  const textStyle = getTextStyle(config);
  const roundedStyle = getRoundedStyle();
  const imageStyle = getImageStyle();
  const buttonStyle = getButtonStyle(config);
  const formStyle = getFormStyle(config);
  const positionStyle = getPositionStyle();
  const backgroundStyle = getBackgroundStyle(config);

  return {
    ...borderStyle,
    ...flexStyle,
    ...marginStyle,
    ...paddingStyle,
    ...sizeStyle,
    ...textStyle,
    ...roundedStyle,
    ...imageStyle,
    ...buttonStyle,
    ...formStyle,
    ...positionStyle,
    ...backgroundStyle,
  };
};

export default getToolStyle;
