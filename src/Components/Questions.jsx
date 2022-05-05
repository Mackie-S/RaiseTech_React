import { useState, useMemo } from "react";

export const Questions = ({ QuestionLists }) => {
  const [qLIsts, setQLists] = useState(QuestionLists);
  const inputAnswer = (selectedAnswer, targetIndex) => {
    setQLists(qLIsts.map((list, index) => (index === targetIndex ? { ...list, selectedAnswer } : list)));
  };
  const correctAnswers = useMemo(() => qLIsts.filter(({ Correct, selectedAnswer }) => Correct === selectedAnswer).length, [qLIsts])
  return (
    <>
      {qLIsts.map(({ Question, Answers, Correct, selectedAnswer }, index) => {
        return (
          <div key={Question}>
            <h2>{Question}</h2>
            <div>
              {Answers.map((answer) => {
                return (
                  <button key={answer} onClick={() => inputAnswer(answer, index)}>
                    {answer}
                  </button>
                );
              })}
            </div>
            {selectedAnswer && <p>{Correct === selectedAnswer ? "正解" : "不正解"}</p>}
          </div>
        );
      })}
      <p> {`${correctAnswers}問正解`}</p>
    </>
  );
};