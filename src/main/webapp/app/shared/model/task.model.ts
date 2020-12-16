import { Moment } from 'moment';

export interface ITask {
  id?: string;
  name?: string;
  dueDate?: string;
  completed?: boolean;
}

export const defaultValue: Readonly<ITask> = {
  completed: false,
};
