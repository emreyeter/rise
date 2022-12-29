import React from 'react'
import { FaPenNib, FaTrash } from 'react-icons/fa'
import Button from '../../components/button/Button'
import { JobItem } from '../../models/JobState'
import { TASK_PRIORITIES } from '../../utils/constants'
import { getButtonTypeByPriority } from '../../utils/helper'
import { BUTTON_TYPES } from '../../utils/types'

interface TaskItemProps {
    job: JobItem
    onRemove? : (job :JobItem) => void
    onPriorityChange?: (job : JobItem) => void
}

function TaskItem(props: TaskItemProps ) {
    const { job, onRemove,onPriorityChange } = props
    const priority =  parseInt(job.priority as unknown as string)

    const handleRemove = () => {
       onRemove?.(job)
    }

    const handlePriorityChange = () => {
        onPriorityChange?.(job)
    }

  return (
    <tr>
        <td>
            {job.name}
        </td>
        <td>
            <Button buttonType={getButtonTypeByPriority(priority)} label={TASK_PRIORITIES[job.priority]} />
        </td>
        <td>
            <Button
              buttonType={BUTTON_TYPES.LIGHT}
              iconLeft={<FaPenNib color="gray" />}
              onClick={handlePriorityChange}
            />
            <Button
              buttonType={BUTTON_TYPES.LIGHT}
              iconLeft={<FaTrash color="gray"/>}
              onClick={handleRemove}
            />
        </td>
    </tr>
  )
}

export default TaskItem
