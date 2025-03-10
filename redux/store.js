import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import quizReducer from "./quizSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quiz: quizReducer
  },
});
