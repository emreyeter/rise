import { TASK_PRIORITIES } from '../utils/constants';

export interface JobItem {
    id: string;
    name: string;
    priority: TASK_PRIORITIES;
}
export interface JobState {
    jobs: JobItem[];
}
