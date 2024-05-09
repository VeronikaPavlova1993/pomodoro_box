import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slice/tasks';
import timerReducer from './slice/timer';
import settingsReducer from './slice/setting';
import statReducer from './slice/stat';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    timer: timerReducer,
    setting: settingsReducer,
    stat: statReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;