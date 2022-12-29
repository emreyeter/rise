import React from 'react'
import { useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux/es/exports'
import Button from '../../components/button/Button'
import Dropdown from '../../components/dropdown/Dropdown'
import Input from '../../components/input/Input'
import Label from '../../components/label/Label'
import { insertJob } from '../../store/actions/JobAction'
import { TASK_PRIORITIES_MAPPED } from '../../utils/constants'
import { CreateJobChildContainer, CreateJobContainer } from './Tasks.styles'

function CreateJob() {

    const { register, handleSubmit,  formState: { errors }, reset } = useForm({
      shouldFocusError: false
    });

    const inputRegister = register('name', { maxLength: 255, required: true, pattern: /^[a-zA-Z0-9]+$/ })
    const dropdownRegister = register('priority', { required: true })
    const dispatch = useDispatch()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
      reset();
      dispatch(insertJob(data))
    };

  return (
    <CreateJobContainer onSubmit={handleSubmit(onSubmit)}>
                <CreateJobChildContainer>
                    <Label label="Job Name" />
                    <Input {...inputRegister} errors={errors} />
                </CreateJobChildContainer>

                <CreateJobChildContainer>
                    <Label label="Job Priority" />
                    <Dropdown {...dropdownRegister} options={TASK_PRIORITIES_MAPPED} />
                </CreateJobChildContainer>

                <CreateJobChildContainer>
                    <Button
                      iconLeft={<FaPlus/>}
                      label="Create"
                    />
                </CreateJobChildContainer>
    </CreateJobContainer>
  )
}

export default CreateJob
