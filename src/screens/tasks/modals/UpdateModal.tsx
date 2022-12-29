import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Modal from 'react-responsive-modal'
import Button from '../../../components/button/Button'
import Dropdown from '../../../components/dropdown/Dropdown'
import Label from '../../../components/label/Label'
import { JobItem } from '../../../models/JobState'
import { updateJob } from '../../../store/actions/JobAction'
import {  TASK_PRIORITIES_MAPPED } from '../../../utils/constants'
import { ModalContainer } from '../Tasks.styles'

interface UpdateModalProps {
    updateJobItem? : JobItem
    setUpdateJobItem : React.Dispatch<React.SetStateAction<JobItem | undefined>>
}

const UpdateModal = (props : UpdateModalProps) => {

    const { register, handleSubmit } = useForm({
        shouldFocusError: false
      });

    const dropdownRegister = register('priority', { required: true })
    const dispatch = useDispatch()
    const { setUpdateJobItem, updateJobItem } = props

    const handleCloseUpdateModal = () => {
        setUpdateJobItem(undefined)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data : any) => {
        dispatch(updateJob({ ...updateJobItem, ...data }))
        handleCloseUpdateModal()
    }

    if(!updateJobItem)
      {return null}

  return (
    <Modal center onClose={handleCloseUpdateModal} open={true} showCloseIcon={false}>
        <Label label="Update this job priority" />
        <ModalContainer onSubmit={handleSubmit(onSubmit)} >
            <Dropdown {...dropdownRegister} options={TASK_PRIORITIES_MAPPED} />
            <Button label="Update" />
        </ModalContainer>
    </Modal>
  )
}

export default React.memo(UpdateModal)
