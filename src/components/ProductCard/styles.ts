import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CtaButton } from '../Button/styles';

export const ProductWrapper = styled.div.attrs(() => ({
  className: 'd-flex flex-column align-items-center justify-content-between',
}))(
  ({ theme }) => css`
    width: 200px;
    padding: ${theme.spacings.xs};

    &:hover {
      background: ${theme.colors.bgMedium};
      border-radius: ${theme.radius.md};
    }

    &:hover > button {
      background: ${theme.colors.bgHigh};
    }

    & > ${CtaButton as any} {
      width: 100%;
    }
  `,
);

export const LinkSection = styled(Link)``;

export const ImgWrapper = styled.div.attrs(() => ({
  className: 'd-flex align-items-center justify-content-center',
}))(
  ({ theme }) => css`
    width: 100%;
    height: 140px;
    background-color: white;
    border-radius: ${theme.radius.md};

    & > img {
      height: 90%;
      width: auto;
    }
  `,
);

export const Title = styled.h2(
  ({ theme }) => css`
    margin-top: ${theme.spacings.sm};
    align-self: flex-start;

    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights.heading};
  `,
);

export const Price = styled.h3(
  ({ theme }) => css`
    margin-top: ${theme.spacings.xs};
    margin-bottom: ${theme.spacings.sm};
    align-self: flex-start;

    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.md};
    line-height: ${theme.lineHeights.heading};
    font-weight: bold;
  `,
);
