import React from 'react'

import { LabelContainer } from './Label.styles'

interface LabelProps {
    label: string
    className?: string
}

function Label(props : LabelProps) {

    const { label, className } = props

  return (
    <LabelContainer className={className} >
        {label}
    </LabelContainer>
  )
}

export default Label
