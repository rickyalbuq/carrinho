import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseAmount } from '../../state/actionCreators';
import { Product } from '../../utils/common';

import {
  Amount,
  DescriptionWrapper,
  ImgWrapper,
  Price,
  RowWrapper,
  Title,
  ValueWrapper,
} from './styles';

interface ProductProps extends Product {
  toGo: string;
  price?: number;
  amount?: number;
}

const CardItem: React.FC<ProductProps> = ({
  toGo,
  name,
  imageUrl,
  price,
  amount,
  sku,
  ...props
}) => {
  const dispatch = useDispatch();
  const handleAmount = bindActionCreators(increaseAmount, dispatch);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current !== null) {
      input.current.value = `${amount}`;
    }
  }, [amount]);

  return (
    <RowWrapper>
      <ImgWrapper>
        <img src={imageUrl} alt={name} />
      </ImgWrapper>
      <DescriptionWrapper>
        <Title to={toGo}>{name}</Title>
        <ValueWrapper>
          <Amount
            ref={input}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleAmount({
                sku,
                amount: Number(e.currentTarget.value),
                product: { name, sku, imageUrl, ...props },
              })
            }
          />
          <Price>
            <small>x</small>
            {` R$ ${price},00`}
          </Price>
        </ValueWrapper>
      </DescriptionWrapper>
    </RowWrapper>
  );
};

export default CardItem;
