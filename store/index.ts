import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./reducers/pageReducer";

export default configureStore({
  reducer: {
    page: pageReducer
  }
});