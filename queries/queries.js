import { gql } from "@apollo/client";

export const GET_ALL_QUIZZES = gql`
query FindAllQuestions {
    findAllQuestions {
      id
      questionText
      answers
      correctAnswer
    }
}

`