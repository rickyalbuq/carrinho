import styled, { css } from 'styled-components';

export const ProductsWrapper = styled.div.attrs(() => ({
  className: 'row offset-1 col-10 d-flex flex-wrap',
}))(
  ({ theme }) => css`
    margin: ${theme.spacings.md} auto;
    gap: ${theme.spacings.md};
  `,
);

export const ResultMessage = styled.h2.attrs(() => ({
  className: 'row offset-1 col-10 d-flex',
}))(
  ({ theme }) => css`
    margin-top: ${theme.spacings.xxxl};
    font-size: ${theme.fontSizes.sm};
    font-weight: 400;

    > strong {
      margin-left: ${theme.spacings.xs};
      font-weight: bold;
    }
  `,
);
