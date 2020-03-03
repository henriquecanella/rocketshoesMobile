import styled from 'styled-components/native';

export const Container = styled.View`
  background: #141419;
  padding: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoButton = styled.TouchableHighlight`
  padding: 5px;
  border-radius: 4px;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const Badge = styled.View`
  position: absolute;
  top: 30px;
  right: 25px;
  width: 16px;
  height: 16px;
  background: #7159c1;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #fff;
`;
