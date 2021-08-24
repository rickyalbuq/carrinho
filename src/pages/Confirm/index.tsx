import React, { useEffect, useState } from 'react';
import intl from 'react-intl-universal';
import { useSelector } from 'react-redux';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { State } from '../../state/reducers';
import { Container } from '../../styles/common';
import { PageWrapper, Purchase, Text } from './styles';

const Confirm = () => {
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
    <Container>
      <Header noCart />
      <PageWrapper>
        <Text>{intl.get('confirm.subtitle')}</Text>
        <Purchase>
          <thead>
            <tr>
              <th colSpan={3}>Detalhes da Compra</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item) => (
              <tr key={item.sku}>
                <td>{`${item.amount}x`}</td>
                <td>{item.product.name}</td>
                <td>{` R$ ${item.product.availability?.price},00`}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                <small>{intl.get('confirm.total')}</small>
                {` R$ ${total},00`}
              </td>
            </tr>
          </tfoot>
        </Purchase>
        <Text>{intl.get('confirm.thanks')}</Text>
        <Button
          type="ctaLink"
          label={intl.get('confirm.toFinish')}
          toGo={intl.get('routes.home')}
        />
      </PageWrapper>
    </Container>
  );
};

export default Confirm;
