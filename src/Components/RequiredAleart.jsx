// 必須項目を選択する前に集計ボタンを押した際にalertが出るコンポーネント
// import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Buttons } from "./Buttons";

export const RequiredAleart = (props) => {
  const errorMessage = () => {
    // もし全ての問いに答えていなかったらアラートを出すという関数
    if (props.category.checked === false) {
      toast.error("全てに解答してください");
    }
  };

  return (
    <>
      <Buttons
        onClick={() => {
          props.onClickShow();
          errorMessage();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        正答を表示する
      </Buttons>
      <Toaster />
    </>
  );
};
