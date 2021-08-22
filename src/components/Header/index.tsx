import React from 'react';

import Button from '../Button';
import { HeaderWrapper, SearchBar, Title } from './styles';

interface IHeader {
  onTyping?: (event: React.FormEvent<HTMLInputElement>) => void;
  hasSearchBar?: boolean;
}

const Header: React.FC<IHeader> = ({ onTyping, hasSearchBar }) => {
  return (
    <HeaderWrapper>
      <Title>Loja</Title>
      {hasSearchBar && <SearchBar onChange={onTyping} />}
      <Button type="icon" icon="cart" iconSize="md" toGo="" />
    </HeaderWrapper>
  );
};

export default Header;
