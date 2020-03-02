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

export const ListContainer = styled.View`
  width: 220px;
  height: 358px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 0 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const ProductText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  margin-top: auto;
`;

export const ProductButton = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

export const ProductButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  padding: 10px;
  color: #fff;
`;
