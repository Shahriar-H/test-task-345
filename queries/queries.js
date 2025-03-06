import { gql } from "@apollo/client";

export const GET_ALL_QUIZZES = gql`
query Quizs {
  Quizs {
    correctAnswer
    id
    options
    question
  }
}
`