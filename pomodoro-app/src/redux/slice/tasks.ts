import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ITask {
  id: number,
 task: string,
}

const initialState: ITask[] = []

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.push(action.payload)
    },
    delTask: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(task => task.id === action.payload)
      state.splice(index, 1) 
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    editTask: (state, action: PayloadAction<any>) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      state[index].task = action.payload.title
    },
  },
})

export const { addTask, delTask, editTask } = tasksSlice.actions

export default tasksSlice.reducer;