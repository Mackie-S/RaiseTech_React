import { useState } from "react";

export const Questions = ({ QuestionLists }) => {
  const [qLIsts, setQLists] = useState(QuestionLists);
  const inputAnswer = (selectedAnswer, targetIndex) => {
    setQLists(qLIsts.map((list, index) => (index === targetIndex ? { ...list, selectedAnswer } : list)));
  };
  const [isShow, setIsShow] = useState(false);
  const onClickStart = () => setIsShow(!isShow);
  const onClickReset = () => {
    window.location.reload();
  };
  return (
    <>
      <button onClick={onClickStart}>始める</button>
      <button onClick={onClickReset}>やり直す</button>
      {isShow && (
        <div>
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
        </div>
      )}
    </>
  );
};
