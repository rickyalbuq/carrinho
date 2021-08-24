import styled, { css } from 'styled-components';

export const ProductsWrapper = styled.div.attrs(() => ({
  className: 'row offset-md-1 col-md-10 d-flex flex-wrap',
}))(
  ({ theme }) => css`
    margin: ${theme.spacings.xxxl} auto;
    gap: ${theme.spacings.md};
  `,
);

export const EmptyMessage = styled.div.attrs(() => ({
  className:
    'row offset-1 col-md-10 d-flex justify-content-center align-items-center',
}))`
  height: 100%;

  & > h2 {
    margin-top: ${({ theme }) => theme.spacings.huge};
    text-align: center;
  }
`;
