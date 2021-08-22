import React from 'react';
import intl from 'react-intl-universal';

import IProduct from '../../utils/product';
import ProductCard from '../ProductCard';
import { EmptyMessage, ProductsWrapper } from './styled';

const AllResult = () => {
  const products = JSON.parse(localStorage.getItem('products') || '{}');

  return (
    <ProductsWrapper>
      {products?.length ? (
        products?.map((product: IProduct) => {
          return (
            <ProductCard
              imageUrl={product?.imageUrl}
              name={product?.name}
              price={product?.availability?.price}
              toGo={intl.get('routes.product', { id: product?.sku })}
              key={product?.sku}
            />
          );
        })
      ) : (
        <EmptyMessage>
          <h2>{intl.get('dashboard.empty')}</h2>
        </EmptyMessage>
      )}
    </ProductsWrapper>
  );
};

export default AllResult;
