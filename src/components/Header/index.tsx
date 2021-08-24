import React, { RefObject, useRef } from 'react';
import intl from 'react-intl-universal';

import Button from '../Button';
import Cart from '../Cart';
import { HeaderWrapper, SearchBar, Title } from './styles';

interface IHeader {
  onTyping?: (event: React.FormEvent<HTMLInputElement>) => void;
  hasSearchBar?: boolean;
}

const Header: React.FC<IHeader> = ({ onTyping, hasSearchBar }) => {
  const modal = useRef<HTMLUListElement>(null);

  const handleModal = (modal: RefObject<HTMLUListElement>) => {
    if (modal?.current?.classList.contains('d-none')) {
      modal?.current?.classList.remove('d-none');
      modal?.current?.classList.add('d-flex');
    } else {
      modal?.current?.classList.add('d-none');
      modal?.current?.classList.remove('d-flex');
    }
  };

  return (
    <HeaderWrapper>
      <Title to={intl.get('routes.dashboard')} replace>
        <h1>{intl.get('dashboard.title')}</h1>
      </Title>
      {hasSearchBar && <SearchBar onChange={onTyping} />}
      <Button
        type="icon"
        icon="cart"
        iconSize="md"
        handleModal={() => handleModal(modal)}
      />
      <Cart modalRef={modal} />
    </HeaderWrapper>
  );
};

export default Header;
