import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ITasksSlice {
  isStart: boolean
  isPause: boolean
  isBreake: boolean
  isBreakeCounter: number
  isPomodoroCounter: number
  increaseTime: number
}

const initialState: ITasksSlice = {
  isStart: false,
  isPause: false,
  isBreake: false,
  isBreakeCounter: 1,
  isPomodoroCounter: 1,
  increaseTime: 25,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isStart = true
    },
    stopTimer: (state) => {
      state.isStart = false
    },
    pause: (state) => {
      state.isPause = true
    },  
    unpause: (state) => {
      state.isPause = false
    },
    setBreake: (state, actions: PayloadAction<boolean>) => {
      state.isBreake = actions.payload
    },
    increasePomodoroCounter: (state) => {
      state.isPomodoroCounter++
    },
    increaseBreakeCounter: (state) => {
      state.isBreakeCounter++
    },
    increaseTime: (state) => {
      state.increaseTime++
      console.log('Yes')
      console.log(state.increaseTime)
    },
    resetTimer: () => initialState
  },
})

export const { startTimer, stopTimer, pause, unpause, setBreake, increasePomodoroCounter, increaseBreakeCounter, resetTimer, increaseTime } = timerSlice.actions

export default timerSlice.reducer