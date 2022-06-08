import { useState } from "react";
import "./App.css";
import { MyTabs } from "./Components/MyTabs";
// import { RequiredAleart } from "./Components/RequiredAleart";
import { Header } from "./Components/Header";

export const App = () => {
  const [isShowQuizzes, setIsShowQuizzes] = useState(false);
  const onClickStart = () => {
    setIsShowQuizzes(!isShowQuizzes);
  };

  const onClickReset = () => {
    window.location.reload();
  };

  // 本当はクイズを始めるボタンを押したらそのボタンを消したい
  return (
    <>
      <Header />
      <button onClick={onClickStart}>クイズを始める</button>
      <button onClick={onClickReset}>やり直す</button>
      {isShowQuizzes && (
        <MyTabs />
      )}

      {/* <RequiredAleart /> */}
    </>
  );
};
