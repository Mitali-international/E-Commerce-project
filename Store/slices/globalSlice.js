import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    isSidebarOpen: false,
    setIsSidebarOpen: ()=>null,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: state => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});
export const { toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;