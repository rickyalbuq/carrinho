import React from 'react';
import intl from 'react-intl-universal';

import IProduct from '../../utils/product';
import ProductCard from '../ProductCard';
import { ProductsWrapper, ResultMessage } from './styled';

interface IResult {
  products: Array<IProduct>;
  search: string;
}

const SearchResult: React.FC<IResult> = ({ products, search }) => {
  return (
    <>
      <ResultMessage>
        {`${intl.get('dashboard.found', { amount: products?.length })} `}
        <strong>{search}</strong>
      </ResultMessage>
      <ProductsWrapper>
        {products?.length > 0 &&
          products?.map((product: IProduct) => (
            <ProductCard
              imageUrl={product?.imageUrl}
              name={product?.name}
              price={product?.availability?.price}
              toGo={intl.get('routes.product', { id: product?.sku })}
              key={product?.sku}
            />
          ))}
      </ProductsWrapper>
    </>
  );
};

export default SearchResult;
