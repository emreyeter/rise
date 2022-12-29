import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux/es/exports'
import ScreenContainer from '../../components/screen/Screen'
import { JobItem } from '../../models/JobState'
import { RootState } from '../../store'
import CreateJob from './CreateJob'
import FilterJob from './FilterJob'
import RemoveModal from './modals/RemoveModal'
import UpdateModal from './modals/UpdateModal'
import TaskItem from './TaskItem'
import { Table } from './Tasks.styles'

function Tasks() {

    const [ jobs ] = useSelector((state: RootState) => [ state.job.jobs ])
    const [ removeJobItem, setRemoveJobItem ] = useState<JobItem>()
    const [ updateJobItem, setUpdateJobItem ] = useState<JobItem>()
    const { watch, register } = useForm()
     const includedString = (job: JobItem, watched: FieldValues) => watched.name ? job.name.includes(watched.name): true

    const equalPriority = (job : JobItem,watched: FieldValues ) => {
        const watched_priority = parseInt(watched.priority ?? 0)

        return watched_priority > 0 ? parseInt(job.priority as unknown as string) === watched_priority - 1 : true
    }

    const filtered = () => {
        const watched = watch()

        return jobs.filter((job) => includedString(job, watched) && equalPriority(job, watched) )

    }

    const onRemove = (job : JobItem) => {
        setRemoveJobItem(job)
    }

    const onPriorityChange = (job : JobItem) => {
        setUpdateJobItem(job)
    }

    const Header = () => <thead>
                            <tr>
                                <th>Name</th>
                                <th>Priority</th>
                                <th>Action</th>
                            </tr>
                        </thead>

    const RenderRows =  () => <>{filtered().map((job) =>
        <TaskItem job={job} key={job.id} onPriorityChange={onPriorityChange} onRemove={onRemove} />
    )}</>

    const Body = () => <tbody>
        <RenderRows />
    </tbody>

  return (
    <ScreenContainer>
        <CreateJob />
        <FilterJob register={register} />
        <Table>
            <Header />
            <Body/>
        </Table>

        <RemoveModal removeJobItem={removeJobItem} setRemoveJobItem={setRemoveJobItem} />
        <UpdateModal setUpdateJobItem={setUpdateJobItem} updateJobItem={updateJobItem} />
    </ScreenContainer>
  )
}

export default Tasks
