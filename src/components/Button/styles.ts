import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { Link, LinkProps } from 'react-router-dom';

interface LinkButtonProps extends LinkProps {
  size?: 'sm' | 'md';
}

interface IconButtonProps {
  size?: 'sm' | 'md';
}

export const CtaLink = styled(Link)(
  ({ theme }) => css`
    width: 200px;
    height: 48px;
    padding: ${theme.spacings.sm} 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.bgMedium};
    color: ${theme.colors.txtMedium};
    line-height: ${theme.lineHeights.link};
    border-radius: ${theme.radius.md};
    &:hover {
      color: ${theme.colors.txtHigh};
      background: ${lighten(0.01, theme.colors.bgMedium)};
    }
  `,
);

export const CtaButton = styled.button.attrs(() => ({
  type: 'button',
}))(
  ({ theme }) => css`
    width: 184px;
    height: 48px;
    padding: ${theme.spacings.sm} 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.bgMedium};
    color: ${theme.colors.txtMedium};
    line-height: ${theme.lineHeights.link};
    border: none;
    cursor: pointer;
    border-radius: ${theme.radius.md};
    font-family: 'Poppins', sans-serif;
    &:hover {
      color: ${theme.colors.txtHigh};
      background: ${lighten(0.01, theme.colors.bgMedium)};
    }
  `,
);

export const GhostButton = styled(Link)(
  ({ theme }) => css`
    color: ${theme.colors.txtMedium};
    line-height: ${theme.lineHeights.link};
    &:hover {
      color: ${theme.colors.txtHigh};
    }
  `,
);

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.txtMedium};
  line-height: ${({ theme }) => theme.lineHeights.link};
  &:hover {
    color: ${({ theme }) => theme.colors.txtHigh};
    rect {
      fill: ${({ theme }) => theme.colors.txtHigh};
    }
  }
  > svg {
    margin-left: ${({ theme }) => theme.spacings.sm};
    width: ${({ size }: LinkButtonProps) => (size === 'sm' ? '16px' : '24px')};
    height: ${({ size }: LinkButtonProps) => (size === 'sm' ? '16px' : '24px')};
    rect {
      fill: ${({ theme }) => theme.colors.txtMedium};
    }
  }
`;

export const IconButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.bgMedium};
  padding: ${({ theme }) => theme.spacings.xxs}
    ${({ theme }) => theme.spacings.xs};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  &:hover rect {
    fill: ${({ theme }) => theme.colors.txtHigh};
  }
  > svg {
    width: ${({ size }: IconButtonProps) => (size === 'sm' ? '16px' : '24px')};
    height: ${({ size }: IconButtonProps) => (size === 'sm' ? '16px' : '24px')};
    rect {
      fill: ${({ theme }) => theme.colors.txtMedium};
    }
  }
`;
