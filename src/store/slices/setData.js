import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}

export const manageData = createSlice({
    name: 'manageData',
    initialState,
    reducers: {
      setData: (state, action) => {
          state.data = action.payload;
      },
    }
  })
  
  export const { setData } = manageData.actions;
  
  export default manageData.reducer