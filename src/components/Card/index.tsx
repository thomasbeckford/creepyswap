import React from 'react';

import { Container } from './styled';

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <Container>{children}</Container>;
}
