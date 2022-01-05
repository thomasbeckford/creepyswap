import React from 'react'

import { Container, Description, Title } from './styled'

type CardProps = {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Container>
  )
}
