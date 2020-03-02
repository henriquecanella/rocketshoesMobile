import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Logo, Badge, BadgeText } from './styles';

import { logo } from '../../assets/images/index';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Icon name="basket" size={26} color="#fff" />
      <Badge>
        <BadgeText>0</BadgeText>
      </Badge>
    </Container>
  );
}
