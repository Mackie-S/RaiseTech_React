import { Date } from "./Date";
import { Buttons } from "./Buttons";

export const Header = (props) => {
  return (
    <header className="flex justify-center bg-blue-900/20 p-5">
      <div className="flex justify-between max-w-6xl w-full">
        <div>
          <h1 className="text-5xl font-bold mb-5">4択クイズ！</h1>
          <p className="text-xl">君はいくつ正解できるかな？</p>
        </div>
        <div className="flex items-end gap-5">
          <Buttons onClick={props.onClickStart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">クイズを始める</Buttons>
          <Buttons onClick={props.onClickReset} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">やり直す</Buttons>
        </div>
        <Date />
      </div>
    </header>
  );
};
