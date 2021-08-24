import styled, { css } from 'styled-components';

export const PageWrapper = styled.div.attrs(() => ({
  className: 'row d-flex flex-column justify-content-center align-items-center',
}))`
  margin-top: ${({ theme }) => theme.spacings.huge};
`;

export const Text = styled.h3(
  ({ theme }) => css`
    text-align: center;
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.txtHigh};
    margin-bottom: ${theme.spacings.lg};
  `,
);

export const Purchase = styled.table.attrs(() => ({
  className: 'col-10',
}))(
  ({ theme }) => css`
    padding: ${theme.spacings.md};
    border: 2px solid ${theme.colors.txtMedium};
    border-radius: ${theme.radius.md};
    margin-bottom: ${theme.spacings.xxl};

    > * {
      font-weight: 400;
      vertical-align: top;
      border-collapse: collapse;
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.txtMedium};
      padding: 0;
      margin: 0;
    }

    th {
      text-align: left;
      font-weight: bold;
      color: ${theme.colors.txtHigh};
      padding-bottom: ${theme.spacings.md};
    }

    tbody tr:not(:last-of-type) > * {
      padding-bottom: ${theme.spacings.sm};
    }

    tbody tr td:first-of-type {
      width: 5px;
      text-align: right;
      padding-right: ${theme.spacings.sm};
    }

    tbody tr td:last-of-type {
      text-align: right;
      padding-left: ${theme.spacings.md};
    }

    tfoot tr td {
      color: ${theme.colors.txtHigh};
      font-size: ${theme.fontSizes.sm};
      font-weight: bold;
      text-align: right;

      > small {
        font-size: ${theme.fontSizes.sm};
      }
      padding-top: ${theme.spacings.md};
    }
  `,
);
