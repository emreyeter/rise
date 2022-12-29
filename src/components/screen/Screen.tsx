import React from 'react'
import Header from '../header/Header'
import { Container } from './Screen.styles'

interface ScreenProps {
    children: React.ReactNode
}

export default  (props : ScreenProps) => {
    const { children } = props

  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

