// 必須項目を選択する前に集計ボタンを押した際にalertが出るコンポーネント
// import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


export const RequiredAleart = () => {
  const errorMessage = () => { 
    toast.error("全てに解答してください");
  }

  return (
    <>
      <button onClick={errorMessage}>集計する</button>
      <Toaster />
    </>
  );
};
