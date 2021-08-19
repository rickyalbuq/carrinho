import styled, { css } from 'styled-components';

export const TitleWrapper = styled.div(
  ({ theme }) => css`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.bgLow};
    color: ${theme.colors.txtLow};

    > h1 {
      color: ${theme.colors.txtHigh};
      font-size: ${theme.fontSizes.xxl};
      line-height: ${theme.lineHeights.heading};
    }

    > p {
      margin-bottom: ${theme.spacings.lg};
    }

    > a {
      margin-top: ${theme.spacings.huge};
    }
  `,
);
