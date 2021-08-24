import styled, { css } from 'styled-components';

export const ProductWrapper = styled.div.attrs(() => ({
  className: 'row offset-1 col-10 d-flex flex-column',
}))`
  margin: ${({ theme }) => theme.spacings.xxxl} auto;
`;

export const Breadcrumbs = styled.h4(
  ({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.txtMedium};
    margin-bottom: ${theme.spacings.xs};
  `,
);

export const RowWrapper = styled.div.attrs(() => ({
  className: 'd-flex',
}))``;

export const DescriptionWrapper = styled.div.attrs(() => ({
  className: 'd-flex flex-column',
}))``;

export const ImgWrapper = styled.div.attrs(() => ({
  className: 'd-flex align-items-center justify-content-center',
}))(
  ({ theme }) => css`
    width: 272px;
    height: 184px;
    background-color: white;
    border-radius: ${theme.radius.md};
    margin-right: ${theme.spacings.lg};

    > img {
      height: 90%;
      width: auto;
    }
  `,
);

export const Title = styled.h2(
  ({ theme }) => css`
    align-self: flex-start;

    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.md};
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

export const Details = styled.div(
  ({ theme }) => css`
    > h4 {
      margin-top: ${theme.spacings.lg};
      margin-bottom: ${theme.spacings.md};
      color: ${theme.colors.txtHigh};
      font-weight: bold;
    }
    > ul {
      list-style: none;
    }
    > ul li {
      text-transform: capitalize;
      margin-bottom: ${theme.spacings.sm};
      color: ${theme.colors.txtMedium};
    }
  `,
);
