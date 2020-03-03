import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Logo, Badge, BadgeText, LogoButton } from './styles';

import { logo } from '../../assets/images/index';

export default function Header(props) {
  const { navigation } = props;

  return (
    <Container>
      <LogoButton onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} />
      </LogoButton>
      <Icon
        name="basket"
        size={26}
        color="#fff"
        onPress={() => navigation.navigate('Cart')}
      />
      <Badge>
        <BadgeText>0</BadgeText>
      </Badge>
    </Container>
  );
}
