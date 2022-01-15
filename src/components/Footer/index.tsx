import React from 'react';

import { AppConfig } from '../../utils/AppConfig';
import { Container } from './styled';

export default function Footer() {
  return (
    <Container>
      © Copyright {new Date().getFullYear()} {AppConfig.title}
    </Container>
  );
}
