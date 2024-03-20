import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITask {
 id: number;
 task: string;
 pomodoro: number;
}

const initialState: ITask[] = [];

export const tasksSlice = createSlice({
 name: 'tasks',
 initialState,
 reducers: {
  addTask: (state, action: PayloadAction<ITask>) => {
   state.push(action.payload);
  },
  delTask: (state, action: PayloadAction<number>) => {
   const index = state.findIndex((task) => task.id === action.payload);
   state.splice(index, 1);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editTask: (state, action: PayloadAction<any>) => {
   const index = state.findIndex((task) => task.id === action.payload.id);
   state[index].task = action.payload.title;
  },
  plusPomodoro: (state, action: PayloadAction<number>) => {
   const index = state.findIndex((task) => task.id === action.payload);
   state[index].pomodoro++;
  },
  minusPomodoro: (state, action: PayloadAction<number>) => {
   const index = state.findIndex((task) => task.id === action.payload);
   state[index].pomodoro > 1 && state[index].pomodoro--;
  },
 },
});

export const { addTask, delTask, editTask, plusPomodoro, minusPomodoro } =
 tasksSlice.actions;

export default tasksSlice.reducer;
