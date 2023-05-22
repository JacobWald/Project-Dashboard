import Question from "./question.js";
import React, { useState, useEffect } from "react";
import { decode } from "html-encoder-decoder";
import { Link } from "react-router-dom";

export default function Trivia() {
  const [questions, setQuestions] = useState([]);
  console.log(questions);
  useEffect(() => {
    generateQuestions(setQuestions);
  }, []);

  const decodedQuestions = questions.map((q) => {
    return {
      ...q,
      question: decode(q.question),
      incorrect_answers: q.incorrect_answers.map((a) => decode(a)),
      correct_answer: decode(q.correct_answer),
    };
  });

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Triva Game!</h1>
      <Link to="/">Project Dashboard</Link>
      <Question questionList={decodedQuestions} />
    </>
  );
}

const generateQuestions = (setData) => {
  fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((data) => setData(data.results));
};
