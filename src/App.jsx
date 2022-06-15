import { useState } from "react";
import "./App.css";
import { EachQuizTabs } from "./Components/EachQuizTabs";
// import { RequiredAleart } from "./Components/RequiredAleart";
import { Header } from "./Components/Header";

export const App = () => {
  const [isShowQuizzes, setIsShowQuizzes] = useState(false);
  // const [isShowCorrectAnswer, setIsShowCorrectAnswer] = useState(false);

  const onClickStart = () => {
      setIsShowQuizzes(isShowQuizzes === false ? !isShowQuizzes : isShowQuizzes)
    };

  const onClickReset = () => {
    window.location.reload();
  };

  // 本当はクイズを始めるボタンを押したらそのボタンを消したい
  return (
    <>
      <Header onClickStart={onClickStart} onClickReset={onClickReset} />
      <div className="flex justify-center">{isShowQuizzes && <EachQuizTabs />}</div>
      {/* <RequiredAleart /> */}
    </>
  );
};
