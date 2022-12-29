import React from 'react'
import { BUTTON_TYPES } from '../../utils/types'
import { ButtonContainer } from './Button.styles'

export interface ButtonProps {
    buttonType?: BUTTON_TYPES
    onClick?: () => void
    label?: string
    className?: string
    iconLeft?: React.ReactNode
}

function Button(props : ButtonProps) {
    const { buttonType, onClick, label, className, iconLeft } = props

  return (
    <ButtonContainer
      buttonType={buttonType || BUTTON_TYPES.PRIMARY}
      className={className}
      onClick={onClick}
    >
        {iconLeft}
        {label}
    </ButtonContainer>
  )
}

export default Button
