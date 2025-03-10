import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        currentQuestion: 0,
        score: {},
        other:{}
    },
    reducers: {
        nextQuestion: (state,action) => {
            state.currentQuestion=action.payload
        },
        incrementScore: (state,action) => {
            state.score=action.payload;
        },
        otherdata: (state,action) => {
            state.other=action.payload;
        }   
    },
});

export const { nextQuestion, incrementScore,otherdata } = quizSlice.actions;
export default quizSlice.reducer;