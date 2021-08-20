import { DefaultTheme } from 'styled-components';
import common from './common';

const dark: DefaultTheme = {
  title: 'dark',
  ...common,
  colors: {
    bgLow: '#1C1E23',
    bgMedium: '#282A31',
    bgHigh: '#3F424D',
    txtLow: '#434343',
    txtMedium: '#A2A2A2',
    txtHigh: '#D0D0D0',
    ...common.colors,
  },
};

export default dark;
