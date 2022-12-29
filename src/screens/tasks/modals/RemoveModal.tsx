import React from 'react'
import { useDispatch } from 'react-redux'

import Modal from 'react-responsive-modal'
import Button from '../../../components/button/Button'
import Label from '../../../components/label/Label'
import { JobItem } from '../../../models/JobState'
import { removeJob } from '../../../store/actions/JobAction'
import { BUTTON_TYPES } from '../../../utils/types'
import { ModalContainer } from '../Tasks.styles'

interface RemoveModalProps {
    removeJobItem? : JobItem
    setRemoveJobItem : React.Dispatch<React.SetStateAction<JobItem | undefined>>
}

const RemoveModal = (props : RemoveModalProps) => {

    const dispatch = useDispatch()
    const { removeJobItem, setRemoveJobItem } = props

    const handleCloseDeleteModal = () => {
        setRemoveJobItem(undefined)
    }

    const handleRemoveJobItem = () => {
        dispatch(removeJob(removeJobItem!))
        handleCloseDeleteModal()
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    if(!removeJobItem)
      {return null}

  return (
    <Modal center onClose={handleCloseDeleteModal} open={true} showCloseIcon={false}>
        <Label label="Are you sure want to remove this item ?" />
        <ModalContainer onSubmit={handleSubmit} >
            <Button buttonType={BUTTON_TYPES.DANGER} label="No" onClick={handleCloseDeleteModal}  />
            <Button buttonType={BUTTON_TYPES.SUCCESS} label="Yes" onClick={handleRemoveJobItem} />
        </ModalContainer>
    </Modal>
  )
}

export default React.memo(RemoveModal)
