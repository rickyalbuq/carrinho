import React from 'react';
import intl from 'react-intl-universal';
import IProduct from '../../utils/product';

import Button from '../Button';
import { ImgWrapper, Price, ProductWrapper, Title } from './styles';

interface ProductProps extends IProduct {
  toGo: string;
  price?: number;
}

const ProductCard: React.FC<ProductProps> = ({
  toGo,
  name,
  imageUrl,
  price,
}) => {
  return (
    <ProductWrapper to={toGo}>
      <div>
        <ImgWrapper>
          <img src={imageUrl} alt={name} />
        </ImgWrapper>
        <Title>{name}</Title>
        <Price>{`R$ ${price},00`}</Price>
      </div>
      <Button
        type="cta"
        label={intl.get('dashboard.toBuy')}
        toGo={intl.get('routes.dashboard')}
      />
    </ProductWrapper>
  );
};

export default ProductCard;
