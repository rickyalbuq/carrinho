import React from 'react';

import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';

import {
  CtaButton,
  GhostButton,
  LinkButton,
  IconButton,
  CtaLink,
} from './styles';

interface Props {
  toGo?: any;
  label?: string;
  type?: 'cta' | 'ghost' | 'link' | 'icon' | 'ctaLink';
  icon?: 'cart' | 'trash';
  iconSize?: 'sm' | 'md';
  addItem?(): void;
  handleModal?(e: React.MouseEvent<HTMLButtonElement>): void;
}

const Button: React.FC<Props> = ({
  label,
  type,
  toGo,
  icon,
  iconSize,
  addItem,
  handleModal,
}) => {
  switch (type) {
    case 'cta':
      return <CtaButton onClick={addItem}>{label}</CtaButton>;
    case 'ctaLink':
      return <CtaLink to={toGo}>{label}</CtaLink>;
    case 'ghost':
      return <GhostButton to={toGo}>{label}</GhostButton>;
    case 'link':
      switch (icon) {
        case 'cart':
          return (
            <LinkButton to={toGo} size={iconSize}>
              {label}
              <Cart />
            </LinkButton>
          );
        case 'trash':
          return (
            <LinkButton to={toGo} size={iconSize}>
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
            <IconButton onClick={handleModal} size={iconSize}>
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
