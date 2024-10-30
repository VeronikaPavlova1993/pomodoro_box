import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISettings {
 pomododroTime: number;
 shortBreakeTime: number;
 longBreakeTime: number;
 longBreakeAmount: number;
}

export const initialState: ISettings = {
 pomododroTime: 25* 60,
 shortBreakeTime: 5 * 60,
 longBreakeTime: 20 * 60,
 longBreakeAmount: 4,
};

export const settingsSlice = createSlice({
 name: 'settings',
 initialState,
 reducers: {
  plusTimeSetting: (state, action: PayloadAction<number>) => {
   state.pomododroTime = action.payload;
   state.pomododroTime++;
  },
  resetSettings: () => initialState,
 },
});

export const { resetSettings, plusTimeSetting } = settingsSlice.actions;

export default settingsSlice.reducer;
