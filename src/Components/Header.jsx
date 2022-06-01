import { Date } from "./Date";
import { MyTabs } from "./MyTabs";

export const Header = () => {
  return (
    <header className="flex justify-center bg-blue-900/20 p-5">
      <div className="flex justify-between max-w-7xl w-full">
        <div>
          <h1 className="text-5xl font-bold mb-5">4択クイズ！</h1>
          <p className="text-xl">君はいくつ正解できるかな？</p>
        </div>
        <MyTabs />
        <Date />
      </div>
    </header>
  );
};
