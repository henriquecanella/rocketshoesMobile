import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrap = styled.View`
  flex: 1;
  padding: 30px;
  background: #191920;
`;

export const Container = styled.View`
  width: 305px;
  height: 473px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 30px;
`;
export const ListContainer = styled.View``;

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  align-self: center;
`;

export const TextContainer = styled.View`
  width: 163px;
  margin-left: 10px;
`;

export const ProductText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #333;
`;
export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  width: 285px;
  height: 50px;
  background: #eee;
  border-radius: 4px;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
`;

export const TextAmount = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #666;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 6px 15px;
  margin: 0 10px;
`;
export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;
export const TotalText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #999;
  text-align: center;
`;
export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -1.6px;
`;
export const FinishButton = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 30px;
  padding: 13px 0;
`;
export const FinishText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
`;
