import styled, { css } from 'styled-components';

export const CartWrapper = styled.ul.attrs(() => ({
  className: 'col-7 d-none flex-column',
}))(
  ({ theme }) => css`
    position: absolute !important;
    top: 48px;
    right: 15px;
    z-index: 10;
    min-height: 248px;
    max-height: 496px;
    padding: ${theme.spacings.sm} ${theme.spacings.md};
    background: ${theme.colors.bgMedium};
    border-radius: ${theme.radius.md};
  `,
);

export const CartHeader = styled.h3(
  ({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.txtHigh};
    margin-bottom: ${theme.spacings.md};
  `,
);

export const CartBody = styled.ul.attrs(() => ({
  className: 'd-flex flex-column',
}))(
  ({ theme }) => css`
    flex: 1;
  `,
);

export const CartFooter = styled.div.attrs(() => ({
  className: 'd-flex justify-content-between align-items-end',
}))(
  ({ theme }) => css`
    margin-top: ${theme.spacings.md};
    justify-self: self-end;

    & > a {
      color: ${theme.colors.txtHigh};
      background: ${theme.colors.bgHigh};
    }
  `,
);

export const Price = styled.h5(
  ({ theme }) => css`
    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.md};
    line-height: ${theme.lineHeights.heading};
    font-weight: bold;
    text-align: right;
    white-space: nowrap;

    > small {
      font-weight: 400;
      font-size: ${theme.fontSizes.sm};
    }
  `,
);

export const EmptyMessage = styled.div.attrs(() => ({
  className: 'd-flex justify-content-center align-items-center',
}))`
  flex: 1;

  > h2 {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-align: center;
  }
`;
