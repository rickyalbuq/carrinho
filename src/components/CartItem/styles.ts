import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const RowWrapper = styled.li.attrs(() => ({
  className: 'd-flex',
}))(
  ({ theme }) => css`
    padding: ${theme.spacings.xs};

    &:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xs};
    }

    &:hover {
      background: ${theme.colors.bgHigh};
      border-radius: ${theme.radius.md};
    }

    &:hover input {
      border: 1px solid ${theme.colors.bgLow};
    }
  `,
);

export const ImgWrapper = styled.div.attrs(() => ({
  className: 'd-flex align-items-center justify-content-center',
}))(
  ({ theme }) => css`
    min-width: 112px;
    max-width: 112px;
    height: 96px;
    background-color: white;
    border-radius: ${theme.radius.md};

    & > img {
      height: 90%;
      width: auto;
    }
  `,
);

export const DescriptionWrapper = styled.div.attrs(() => ({
  className: 'd-flex flex-column justify-content-between',
}))`
  margin-left: ${({ theme }) => theme.spacings.sm};
`;

export const Title = styled(Link)(
  ({ theme }) => css`
    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.heading};
  `,
);

export const ValueWrapper = styled.div.attrs(() => ({
  className: 'd-flex align-items-center',
}))`
  margin-top: ${({ theme }) => theme.spacings.xs};
  color: ${({ theme }) => theme.colors.txtHigh};
`;

export const Amount = styled.input.attrs(() => ({
  type: 'number',
}))(
  ({ theme }) => css`
    margin-right: ${theme.spacings.xs};
    height: ${theme.spacings.xl};
    width: ${theme.spacings.xl};
    background: ${theme.colors.bgHigh};
    border-radius: ${theme.radius.md};
    border: none;
    outline: none;

    text-align: center;
    color: ${theme.colors.txtHigh};
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
);

export const Price = styled.h5(
  ({ theme }) => css`
    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.md};
    line-height: ${theme.lineHeights.heading};
    font-weight: bold;

    > small {
      font-weight: 400;
      font-size: ${theme.fontSizes.sm};
    }
  `,
);
