import { JobItem } from '../../models/JobState';
import { v4 as uuidv4 } from 'uuid'

export enum JOB_ACTION_TYPES {
    INSERT = '@@job/INSERT',
    REMOVE = '@@job/REMOVE',
    UPDATE = '@@job/UPDATE',
}

export const insertJob = (job: JobItem) => ({
    type    : JOB_ACTION_TYPES.INSERT,
    payload : { ...job ,id: uuidv4() }
})

export const removeJob = (payload: JobItem) => ({
    type: JOB_ACTION_TYPES.REMOVE,
    payload
})

export const updateJob = (payload: JobItem) => ({
    type: JOB_ACTION_TYPES.UPDATE,
    payload
})
