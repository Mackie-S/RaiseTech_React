import { useState } from "react";
import "./App.css";
import { ReactQuiz, SuperHeroQuiz } from "./Components/QuizLists.jsx";

export const App = () => {
  const [isShow, setIsShow] = useState(false);
  const onClickStart = () => setIsShow(!isShow);
  const onClickReset = () => {
    window.location.reload();
  };

        //本当はクイズを始めるボタンを押したらそのボタンを消したい
  return (
    <>
      <button onClick={onClickStart}>クイズを始める</button>
      <button onClick={onClickReset}>やり直す</button>
      {isShow && (
        //ここにもフラグメントが必要なのはなぜ？
        <>
          <ReactQuiz />
          <SuperHeroQuiz />
        </>
      )}
    </>
  );
};
