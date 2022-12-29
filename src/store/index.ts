
import { configureStore } from '@reduxjs/toolkit'
import { StorageDevice, STORAGE_KEYS } from '../utils/storage'
import { JobReducer } from './reducers/JobReducer'

const store = configureStore({
    reducer: {
        job: JobReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store

store.subscribe(() => {
    const { job }  = store.getState()

    StorageDevice.setItem(STORAGE_KEYS.JOBS,JSON.stringify(job.jobs))
})

