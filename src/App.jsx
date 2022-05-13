import { useState } from "react";
import "./App.css";
import { Quizzes } from "./Components/QuizLists.jsx";
//dayjsを仮想Dom内で使用したかったため導入
import Dayjs from "react-dayjs";

export const App = () => {
  const [isShow, setIsShow] = useState(false);
  const onClickStart = () => {
    setIsShow(!isShow);
  };

  const onClickReset = () => {
    window.location.reload();
  };

  //本当はクイズを始めるボタンを押したらそのボタンを消したい
  return (
    <>
      <button onClick={onClickStart}>クイズを始める</button>
      <button onClick={onClickReset}>やり直す</button>
      <Dayjs></Dayjs>
      {isShow && (
        //ここにもフラグメントが必要なのはなぜ？
          <Quizzes />
      )}
    </>
  );
};
