import { DefaultTheme } from 'styled-components';
import common from './common';

const light: DefaultTheme = {
  title: 'light',
  ...common,
  colors: {
    bgLow: '#E0E0E0',
    bgMedium: '#EEEEEE',
    bgHigh: '#FAFAFA',
    txtLow: '#BDBDBD',
    txtMedium: '#757575',
    txtHigh: '#424242',
    ...common.colors,
  },
};

export default light;
