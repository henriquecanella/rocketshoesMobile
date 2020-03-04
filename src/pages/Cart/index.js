import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import {
  Container,
  ListContainer,
  ProductImage,
  ProductList,
  ProductText,
  ProductPrice,
  ProductAmount,
  TextAmount,
  ProductSubtotal,
  TotalText,
  TotalPrice,
  FinishButton,
  FinishText,
  TextContainer,
  ProductContainer,
  Wrap,
  AmountContainer,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: `R$${(product.price * product.amount).toFixed(2)}`,
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    console.tron.log('incrementou');
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Wrap>
      <Container>
        <ProductList
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ListContainer>
              <ProductContainer>
                <ProductImage source={{ uri: item.image }} />
                <TextContainer>
                  <ProductText>{item.title}</ProductText>
                  <ProductPrice>{item.price}</ProductPrice>
                </TextContainer>
              </ProductContainer>
              <ProductAmount>
                <AmountContainer>
                  <Icon
                    name="remove-circle-outline"
                    size={25}
                    color="#7159c1"
                    onPress={() => decrement(item)}
                  />
                  <TextAmount>{String(item.amount)}</TextAmount>
                  <Icon
                    name="add-circle-outline"
                    size={25}
                    color="#7159c1"
                    onPress={() => increment(item)}
                  />
                </AmountContainer>
                <ProductSubtotal>{item.subtotal}</ProductSubtotal>
              </ProductAmount>
            </ListContainer>
          )}
        />
        <TotalText>TOTAL</TotalText>
        <TotalPrice>{`R$${total.toFixed(2)}`}</TotalPrice>
        <FinishButton>
          <FinishText>FINALIZAR PEDIDO</FinishText>
        </FinishButton>
      </Container>
    </Wrap>
  );
}
