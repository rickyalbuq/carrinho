import React, { useState, useEffect } from 'react';
import intl from 'react-intl-universal';
import { useLocation } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container } from '../../styles/common';
import IProduct from '../../utils/product';
import {
  Breadcrumbs,
  DescriptionWrapper,
  Details,
  ImgWrapper,
  Price,
  ProductWrapper,
  RowWrapper,
  Title,
} from './styles';

const Product: React.FC = () => {
  const location = useLocation();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products') || '{}');

    setProduct(
      products?.filter((item: IProduct) =>
        location.pathname.substr(
          intl.get('routes.product', { id: '' }).length,
        ) === item?.sku
          ? item
          : undefined,
      )[0],
    );
  }, [location.pathname, setProduct]);

  return (
    <Container>
      <Header />
      {product?.name ? (
        <ProductWrapper>
          <Breadcrumbs>{`${product?.subcategory?.category?.name} > ${product?.subcategory?.name}`}</Breadcrumbs>
          <RowWrapper>
            <ImgWrapper>
              <img src={product?.imageUrl} alt={product?.name} />
            </ImgWrapper>
            <DescriptionWrapper>
              <Title>{product?.name}</Title>
              <Price>{`R$ ${product?.availability?.price},00`}</Price>
              <Button
                type="cta"
                label={intl.get('product.toBuy')}
                toGo={intl.get('routes.dashboard')}
              />
            </DescriptionWrapper>
          </RowWrapper>
          <Details>
            <h4>{intl.get('product.details')}</h4>
            <ul>
              <li>{`${intl.get('product.vendor')}: ${
                product?.vendor?.name
              }`}</li>
              <li>{`${intl.get('product.brand')}: ${product?.brand?.name}`}</li>
              {product?.skuFeatures?.map(
                (item: { name: string; value: string }, k: number) => {
                  return (
                    <li key={k}>{`${item?.name.toLocaleLowerCase()}: ${
                      item?.value
                    }`}</li>
                  );
                },
              )}
            </ul>
          </Details>
        </ProductWrapper>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Product;
