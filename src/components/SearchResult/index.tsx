import React from 'react';
import intl from 'react-intl-universal';
import { Product } from '../../utils/common';

import ProductCard from '../ProductCard';
import { ProductsWrapper, ResultMessage } from './styled';

interface Result {
  products: Array<Product>;
  search: string;
}

const SearchResult: React.FC<Result> = ({ products, search }) => {
  return (
    <>
      <ResultMessage>
        {`${intl.get('dashboard.found', { amount: products?.length })} `}
        <strong>{search}</strong>
      </ResultMessage>
      <ProductsWrapper>
        {products?.length > 0 &&
          products?.map((product: Product) => (
            <ProductCard
              price={product?.availability?.price}
              toGo={intl.get('routes.product', { id: product?.sku })}
              key={product?.sku}
              {...product}
            />
          ))}
      </ProductsWrapper>
    </>
  );
};

export default SearchResult;
