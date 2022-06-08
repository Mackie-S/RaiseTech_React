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
      <div className="flex justify-center mt-16">
        <button onClick={onClickStart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          クイズを始める
        </button>
        <button onClick={onClickReset} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
          やり直す
        </button>
      </div>
      <div className="flex justify-center">{isShowQuizzes && <MyTabs />}</div>

      {/* <RequiredAleart /> */}
    </>
  );
};
