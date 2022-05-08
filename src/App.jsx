import { useState, useEffect } from "react";
import "./App.css";
import { Quizzes } from "./Components/QuizLists.jsx";

export const App = () => {
  const [isShow, setIsShow] = useState(false);
  const onClickStart = () => {
    setIsShow(!isShow);
  };

  //「クイズを始める」ボタンを押すと再レンダリングされることがわかったので記述（この書き方であっている？）
  useEffect(() => {
    return (
      <>
        <button onClick={onClickStart}>クイズを始める</button>
      </> 
    )
    //eslint-disable-next-line
  },[])

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
          <Quizzes />
        </>
      )}
    </>
  );
};
