import React, { useState, useEffect } from 'react';
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
              <ProductButtonText>ADICIONAR</ProductButtonText>
            </ProductButton>
          </ListContainer>
        )}
      />
    </Container>
  );
}
