// 正答数を集計するボタンのコンポーネント => うまくコンポーネント分割できなかったのでどこにもimportされていないコンポーネント。。。
import { useState, useMemo } from "react";

export const Result = (questionLists) => {

  const [isShowAnswers, setIsShowAnswers] = useState(false);
  const onClickshow = () => {
    setIsShowAnswers(!isShowAnswers);
  };

  const correctAnswers = useMemo(() => questionLists.filter(({ Correct, selectedAnswer }) => Correct === selectedAnswer).length, [questionLists]);

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
    <div>
      <button onClick={onClickshow}>集計する</button>
      {isShowAnswers && <p> {`${variableMessage()}${correctAnswers}問正解`}</p>}
    </div>
  );
};
