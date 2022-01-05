import React from 'react'
import { Container } from './styled'
import { AppConfig } from '../../utils/AppConfig'

export default function Footer() {
  return (
    <Container>
      © Copyright {new Date().getFullYear()} {AppConfig.title}
    </Container>
  )
}
