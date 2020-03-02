import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #191920;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ListContainer = styled.View``;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductText = styled.Text``;

export const ProductPrice = styled.Text``;

export const ProductButton = styled(RectButton)``;

export const ProductButtonText = styled.Text``;
