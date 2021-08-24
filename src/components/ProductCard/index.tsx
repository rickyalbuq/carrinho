import React from 'react';
import intl from 'react-intl-universal';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../state/actionCreators';
import { Product } from '../../utils/common';

import Button from '../Button';
import {
  ImgWrapper,
  LinkSection,
  Price,
  ProductWrapper,
  Title,
} from './styles';

interface ProductProps extends Product {
  toGo: string;
  price?: number;
}

const ProductCard: React.FC<ProductProps> = ({ toGo, price, ...props }) => {
  const dispatch = useDispatch();
  const addItem = bindActionCreators(addToCart, dispatch);

  return (
    <ProductWrapper>
      <LinkSection to={toGo}>
        <ImgWrapper>
          <img src={props.imageUrl} alt={props.name} />
        </ImgWrapper>
        <Title>{props.name}</Title>
        <Price>{`R$ ${price},00`}</Price>
      </LinkSection>
      <Button
        type="cta"
        label={intl.get('dashboard.toBuy')}
        addItem={() => addItem({ sku: props?.sku, amount: 1, product: props })}
      />
    </ProductWrapper>
  );
};

export default ProductCard;
