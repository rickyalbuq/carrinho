import React from 'react';

import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';

import { CtaButton, GhostButton, LinkButton, IconButton } from './styles';

interface Props {
  to?: any;
  label?: string;
  type?: 'cta' | 'ghost' | 'link' | 'icon';
  icon?: 'cart' | 'trash';
  iconSize?: 'sm' | 'md';
}

const Button: React.FC<Props> = ({ label, type, to, icon, iconSize }) => {
  switch (type) {
    case 'cta':
      return <CtaButton to={to}>{label}</CtaButton>;
    case 'ghost':
      return <GhostButton to={to}>{label}</GhostButton>;
    case 'link':
      switch (icon) {
        case 'cart':
          return (
            <LinkButton to={to} size={iconSize}>
              {label}
              <Cart />
            </LinkButton>
          );
        case 'trash':
          return (
            <LinkButton to={to} size={iconSize}>
              {label}
              <Trash />
            </LinkButton>
          );
        default:
          return null;
      }
    case 'icon':
      switch (icon) {
        case 'cart':
          return (
            <IconButton size={iconSize}>
              <Cart />
            </IconButton>
          );
        case 'trash':
          return (
            <IconButton size={iconSize}>
              <Trash />
            </IconButton>
          );
        default:
          return null;
      }
    default:
      return null;
  }
};

export default Button;
