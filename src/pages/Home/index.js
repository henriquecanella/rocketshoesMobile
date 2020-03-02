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

  console.tron.log(products);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      console.tron.log(response);

      const { data } = response;

      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <List
        data={products}
        keyExtractor={product => product.id}
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
