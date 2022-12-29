import React from 'react'
import { Container, OptionItem } from './Dropdown.styles'

interface DropdownProps {
    options: string[]
    className?: string
    forwardedRef?: React.Ref<HTMLSelectElement>
}

function Dropdown(props : DropdownProps) {

    const { options, className, forwardedRef, ...rest } = props

  return (
    <Container
      className={className}
      ref={forwardedRef}
      {...rest}
    >
        {
          options?.map((option, index) => <OptionItem key={index} value={index}>{option}</OptionItem>)
        }
    </Container>
  )
}

export default React.forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => (
    <Dropdown {...props} forwardedRef={ref} />
))
