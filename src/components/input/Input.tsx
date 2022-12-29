import React from 'react'
import { FieldErrorsImpl } from 'react-hook-form/dist/types'
import { Container } from './Input.styles'

interface InputProps extends  React.InputHTMLAttributes<HTMLInputElement> {
    type?: React.HTMLInputTypeAttribute
    forwardedRef?: React.Ref<HTMLInputElement>
    name?: string
    errors?: Partial<FieldErrorsImpl<{
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: string]: any;
  }>>
}

function Input(props : InputProps) {

  const { forwardedRef,type,errors, name,  ...rest } = props
  const hasError =  !!errors?.[name!]

  return (
    <Container
      error={hasError}
      name={name}
      ref={forwardedRef}
      type={type || 'text'}
      {...rest}
    />
  )
}

export default React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <Input {...props} forwardedRef={ref} />
))
