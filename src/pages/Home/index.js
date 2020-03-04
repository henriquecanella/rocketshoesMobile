import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as CartActions from '../../store/modules/cart/actions';

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
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: `R$${product.price}`,
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addTocartRequest(id));
  }

  return (
    <Container>
      <List
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <ListContainer>
            <ProductImage source={{ uri: item.image }} />
            <ProductText>{item.title}</ProductText>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <ProductButton onPress={() => handleAddProduct(item.id)}>
              <ProductAmount>
                <Icon name="cart-plus" size={15} color="#fff" />
                <ProductButtonAmount>
                  {amount[item.id] || 0}
                </ProductButtonAmount>
              </ProductAmount>
              <ProductButtonText>ADICIONAR</ProductButtonText>
            </ProductButton>
          </ListContainer>
        )}
      />
    </Container>
  );
}
