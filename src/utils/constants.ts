export enum TASK_PRIORITIES  {
    URGENT,
    IMPORTANT,
    NORMAL,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TASK_PRIORITIES_MAPPED = Object.keys(TASK_PRIORITIES).filter((task: any) => isNaN(task))
