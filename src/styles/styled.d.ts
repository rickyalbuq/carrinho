import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'light' | 'dark';

    colors: {
      bgLow: string;
      bgMedium: string;
      bgHigh: string;

      txtLow: string;
      txtMedium: string;
      txtHigh: string;

      turquoise: string;
      green: string;
      yellow: string;
      orange: string;
      red: string;
      magenta: string;
      pink: string;
      purple: string;
      blue: string;
      cyan: string;
    };

    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    lineHeights: {
      list: string;
      paragraph: string;
      heading: string;
      link: string;
    };

    spacings: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      huge: string;
    };

    shadows: {
      card: string;
    };

    radius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
