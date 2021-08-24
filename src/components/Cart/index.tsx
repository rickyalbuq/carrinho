import React, { RefObject, useEffect, useState } from 'react';
import intl from 'react-intl-universal';
import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { State } from '../../state/reducers';
import { Item } from '../../utils/common';

import Button from '../Button';
import CardItem from '../CartItem';
import {
  CartBody,
  CartFooter,
  CartHeader,
  CartWrapper,
  EmptyMessage,
  Price,
} from './styles';

interface CartProps {
  modalRef: RefObject<HTMLUListElement>;
}

const Cart = ({ modalRef }: CartProps) => {
  const items = useSelector((state: State) => state.cart);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(
      items.length > 0
        ? items
            ?.map(
              (item) => item.amount * (item.product?.availability?.price || 0),
            )
            ?.reduce((acc, curr) => acc + curr)
        : 0,
    );
  }, [items]);

  return (
    <CartWrapper ref={modalRef}>
      <CartHeader>
        {`${intl.get('cart.title')} - ${intl.get('cart.subtitle', {
          amount: items?.length,
        })}`}
      </CartHeader>
      {items?.length > 0 ? (
        <>
          <SimpleBar style={{ maxHeight: 328 }}>
            <CartBody>
              {items?.map(({ product, amount }: Item) => (
                <CardItem
                  price={product?.availability?.price}
                  toGo={intl.get('routes.product', { id: product?.sku })}
                  key={product?.sku}
                  amount={amount}
                  {...product}
                />
              ))}
            </CartBody>
          </SimpleBar>
          <CartFooter>
            <Button
              type="ctaLink"
              label={intl.get('cart.toFinish')}
              toGo={intl.get('routes.dashboard')}
            />
            <Price>
              <small>{intl.get('cart.total')}:</small>
              {` R$ ${total},00`}
            </Price>
          </CartFooter>
        </>
      ) : (
        <EmptyMessage>
          <h2>{intl.get('cart.empty')}</h2>
        </EmptyMessage>
      )}
    </CartWrapper>
  );
};

export default Cart;
