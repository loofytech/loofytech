import { createSlice } from "@reduxjs/toolkit";

const pageReducer = createSlice({
  name: "pageReducer",
  initialState: {
    PAGE_ONE: true,
    PAGE_TWO: false,
    PAGE_THREE: false
  },
  reducers: {
    setPageOne: (state, param) => {
      state.PAGE_ONE = param.payload;
    },
    setPageTwo: (state, param) => {
      state.PAGE_TWO = param.payload;
    },
    setPageThree: (state, param) => {
      state.PAGE_THREE = param.payload;
    }
  }
});

export const {setPageOne, setPageTwo, setPageThree} = pageReducer.actions;

export default pageReducer.reducer;