import React, { useState, useEffect } from 'react';
import intl from 'react-intl-universal';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { addToCart } from '../../state/actionCreators';
import { State } from '../../state/reducers';
import { Container } from '../../styles/common';
import { Product } from '../../utils/common';

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

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const products = useSelector((state: State) => state.product);
  const addItem = bindActionCreators(addToCart, dispatch);

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(
      products?.filter((item: Product) =>
        location.pathname.substr(
          intl.get('routes.product', { id: '' }).length,
        ) === item?.sku
          ? item
          : undefined,
      )[0],
    );
  }, [location.pathname, products]);

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
                addItem={() =>
                  addItem({ sku: product?.sku, amount: 1, product })
                }
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

export default ProductDetail;
