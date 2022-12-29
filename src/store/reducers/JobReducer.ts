import { JobState } from '../../models/JobState'
import { sortByPriorityAndName } from '../../utils/helper'
import { StorageDevice, STORAGE_KEYS } from '../../utils/storage'
import { JOB_ACTION_TYPES } from '../actions/JobAction'

const initialState: JobState = {
    jobs: StorageDevice.getItem(STORAGE_KEYS.JOBS, [], true)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const JobReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case JOB_ACTION_TYPES.INSERT:
            return {
                ...state,
                jobs: sortByPriorityAndName([ ...state.jobs, action.payload ])
            }
        case JOB_ACTION_TYPES.REMOVE:
            // eslint-disable-next-line no-console
            console.log(state.jobs, action)

            return {
                ...state,
                jobs: state.jobs.filter((job) => job.id !== action.payload.id)
            }
        case JOB_ACTION_TYPES.UPDATE:
            return {
                ...state,
                jobs: sortByPriorityAndName(
                  [
                    ...state.jobs.filter((job) => job.id !== action.payload.id),
                    action.payload ]
                )
            }
        default :
            return state
    }
}
