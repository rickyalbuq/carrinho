import styled, { css } from 'styled-components';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div.attrs(() => ({
  className:
    'row offset-1 col-10 d-flex justify-content-between align-items-center',
}))(
  ({ theme }) => css`
    position: relative;
    margin-top: ${theme.spacings.xxl};
  `,
);

export const Title = styled(Link)(
  ({ theme }) => css`
    h1 {
      font-size: ${theme.fontSizes.lg};
      color: ${theme.colors.txtHigh};
    }
  `,
);

export const SearchBar = styled.input.attrs(() => ({
  type: 'text',
  className: 'col-5',
  placeholder: intl.get('dashboard.placeholder'),
}))(
  ({ theme }) => css`
    height: ${theme.spacings.xl};
    background: ${theme.colors.bgMedium};
    border-radius: ${theme.radius.md};
    border: none;
    outline: none;

    text-align: center;
    color: ${theme.colors.txtHigh};

    &::placeholder {
      color: ${theme.colors.txtLow};
      font-family: 'Poppins', sans-serif;
      font-style: italic;
    }
  `,
);
