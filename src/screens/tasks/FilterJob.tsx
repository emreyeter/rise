import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { TASK_PRIORITIES_MAPPED } from '../../utils/constants'
import { FilterContainer, FilterDropdown, FilterInput } from './Tasks.styles'

interface FilterJobProps {
    register : UseFormRegister<FieldValues>
}

function FilterJob(props : FilterJobProps) {

    const { register } = props
    const inputRegister = register('name', { maxLength: 255, pattern: /^[a-zA-Z0-9]+$/ })
    const dropdownRegister = register('priority')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
  }

  return (
    <FilterContainer onSubmit={handleSubmit} >
        <FilterInput placeholder="Search Job" {...inputRegister} />
        <FilterDropdown options={[ 'PRIORITY (ALL)', ...TASK_PRIORITIES_MAPPED ]} {...dropdownRegister} />
    </FilterContainer>
  )
}

export default FilterJob
