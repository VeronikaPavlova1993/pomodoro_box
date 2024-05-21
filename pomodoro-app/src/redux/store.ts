import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slice/tasks';
import timerReducer from './slice/timer';
import settingsReducer from './slice/setting';
import statReducer from './slice/statistic';
import selectReducer from './slice/selectSlice';

export const store = configureStore({
 reducer: {
  tasks: tasksReducer,
  timer: timerReducer,
  setting: settingsReducer,
  stat: statReducer,
  select: selectReducer,
 },
 devTools: true,
});

function saveToLocalStorage(state: RootState) {
 try {
  const serializedState = JSON.stringify(state);
  if (typeof window !== 'undefined') {
   localStorage.setItem('persistentState', serializedState);
  }
 } catch (e) {
  console.warn(e);
 }
}

store.subscribe(() => {
 saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
