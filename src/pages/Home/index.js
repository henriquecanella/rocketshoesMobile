import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api';

import {
  Container,
  List,
  ListContainer,
  ProductImage,
  ProductText,
  ProductPrice,
  ProductButton,
  ProductButtonText,
  ProductAmount,
  ProductButtonAmount,
} from './styles';

export default function Home() {
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
    <Container>
      <List
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <ListContainer>
            <ProductImage source={{ uri: item.image }} />
            <ProductText>{item.title}</ProductText>
            <ProductPrice>{item.price}</ProductPrice>
            <ProductButton>
              <ProductAmount>
                <Icon name="cart-plus" size={15} color="#fff" />
                <ProductButtonAmount>5</ProductButtonAmount>
              </ProductAmount>
              <ProductButtonText>ADICIONAR</ProductButtonText>
            </ProductButton>
          </ListContainer>
        )}
      />
    </Container>
  );
}
