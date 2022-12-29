import { JobItem } from '../models/JobState';
import { TASK_PRIORITIES } from './constants';
import { BUTTON_TYPES } from './types';

export function sortByPriorityAndName(elements : JobItem[]) {
    elements.sort(function(a, b) {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }

        return a.name.localeCompare(b.name);

    });

    return elements;
}

export function getButtonTypeByPriority(priority: number) {
    switch (priority as TASK_PRIORITIES) {
        case TASK_PRIORITIES.URGENT:
            return BUTTON_TYPES.DANGER;
        case TASK_PRIORITIES.IMPORTANT:
            return BUTTON_TYPES.WARNING;
        default:
            return BUTTON_TYPES.INFO;
    }
}
