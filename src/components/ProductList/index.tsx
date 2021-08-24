import React, { useEffect } from 'react';
import intl from 'react-intl-universal';
import { useSelector } from 'react-redux';
import { State } from '../../state/reducers';
import { Product } from '../../utils/common';

import ProductCard from '../ProductCard';
import { EmptyMessage, ProductsWrapper } from './styled';

const ProductList = () => {
  const products = useSelector((state: State) => state.product);

  useEffect(() => {}, [products]);

  return (
    <ProductsWrapper>
      {products?.length ? (
        products?.map((product: Product) => {
          return (
            <ProductCard
              price={product?.availability?.price}
              toGo={intl.get('routes.product', { id: product?.sku })}
              key={product?.sku}
              {...product}
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

export default ProductList;
