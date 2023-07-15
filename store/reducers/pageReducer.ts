import { createSlice } from "@reduxjs/toolkit";

const pageReducer = createSlice({
  name: "pageReducer",
  initialState: {
    PAGE_ONE: true,
    PAGE_TWO: false
  },
  reducers: {
    setPageOne: (state, param) => {
      state.PAGE_ONE = param.payload;
    },
    setPageTwo: (state, param) => {
      state.PAGE_TWO = param.payload;
    }
  }
});

export const {setPageOne, setPageTwo} = pageReducer.actions;

export default pageReducer.reducer;