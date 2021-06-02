import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {ThemeType} from '@/constants/enum';
import themes from '@/theme';

const useTheme = () => {
  const {theme = ThemeType.LIGHT} = useSelector((state: any) => state.system);
  const themeStyle = useMemo(() => {
    return (themes as any)[theme];
  }, [theme]);
  return themeStyle as any;
};

export default useTheme;
