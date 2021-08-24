import { rem } from 'polished';

const common = {
  colors: {
    turquoise: '#65CBA0',
    green: '#92D655',
    yellow: '#CCAF4E',
    orange: '#E2673E',
    red: '#BD271B',
    magenta: '#B22A66',
    pink: '#B532B1',
    purple: '#6A1F99',
    blue: '#245BC8',
    cyan: '#376E82',
  },

  fontSizes: {
    xxs: rem(12),
    xs: rem(14),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(40),
    xxl: rem(48),
  },

  lineHeights: {
    list: '160%',
    paragraph: '140%',
    heading: '120%',
    link: '100%',
  },

  spacings: {
    xxs: rem(4),
    xs: rem(8),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(40),
    xxl: rem(56),
    xxxl: rem(80),
    huge: rem(104),
  },

  shadows: {
    card: 'inset 0px 4px 4px #1C1E23',
  },

  radius: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(20),
  },
};

export default common;
