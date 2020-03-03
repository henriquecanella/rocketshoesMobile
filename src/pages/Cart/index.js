import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const { data } = response;

      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <Wrap>
      <Container>
        <ProductList
          data={products}
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
                  />
                  <TextAmount>5</TextAmount>
                  <Icon name="add-circle-outline" size={25} color="#7159c1" />
                </AmountContainer>
                <ProductSubtotal>500</ProductSubtotal>
              </ProductAmount>
            </ListContainer>
          )}
        />
        <TotalText>TOTAL</TotalText>
        <TotalPrice>1500</TotalPrice>
        <FinishButton>
          <FinishText>FINALIZAR PEDIDO</FinishText>
        </FinishButton>
      </Container>
    </Wrap>
  );
}
