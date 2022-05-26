import { useState, useMemo} from "react";

export const Questions = ({ questionLists }) => {
  const [isShowAnswers, setIsShowAnswers] = useState(false);
  const onClickshow = () => {
    setIsShowAnswers(!isShowAnswers);
  };
  const [qLIsts, setQLists] = useState(questionLists);
  const inputAnswer = (selectedAnswer, targetIndex) => {
    setQLists(qLIsts.map((list, index) => (index === targetIndex ? { ...list, selectedAnswer } : list)));
  };
  const correctAnswers = useMemo(() => qLIsts.filter(({ Correct, selectedAnswer }) => Correct === selectedAnswer).length, [qLIsts]);
  const variableMessage = () => {
    if (correctAnswers === 0) {
      return "残念👋";
    } else if (correctAnswers === 1) {
      return "がんばれ💪";
    } else if (correctAnswers === 2) {
      return "まだまだ✊";
    } else if (correctAnswers === 3) {
      return "もう少し✋";
    } else if (correctAnswers === 4) {
      return "おめでとう👏全";
    }
  };

  return (
    <>
      {qLIsts.map(({ Question, Answers, Correct, selectedAnswer }, index) => {
        return (
          <div key={Question}>
            <h2>{Question}</h2>
            <div>
              {Answers.map((answer) => {
                return (
                  <label key={answer}>
                    {/* name={index}とすることで複数選択されてしまう現象が解消 */}
                    <input type="radio" name={index} required onChange={() => inputAnswer(answer, index)} />
                    {answer}
                  </label>
                );
              })}
            </div>
            {(isShowAnswers && selectedAnswer) && <p>{Correct === selectedAnswer ? "正解" : "不正解"}</p>}
          </div>
        );
      })}
      <button onClick={onClickshow}>集計する</button>
      {isShowAnswers && (
          <p> {`${variableMessage()}${correctAnswers}問正解`}</p>
      )}
    </>
  );
};
