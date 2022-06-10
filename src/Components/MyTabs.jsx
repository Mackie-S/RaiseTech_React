import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Test} from "./Test"

// import { MyRadioGroup } from './MyRadioGroup'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MyTabs = () => {
  const [categories] = useState({
    Reactクイズ: [
      {
        id: 1,
        Question: "Reactを開発したのは誰？",
        Answers: ["Twitter", "Facebook", "mixi", "Brendan Eich"],
        Correct: "Facebook",
        SelectedAnswer: "",
      },
      {
        id: 2,
        Question: "Reactのフレームワークでないものはどれ？",
        Answers: ["Next.js", "Remix", "Gatsby", "Gridsome"],
        Correct: "Gridsome",
        selectedAnswer: "",
      },
    ],
    スーパー戦隊クイズ: [
      {
        id: 1,
        Question: "初代のスーパー戦隊はどれ？",
        Answers: ["ジャッカー電撃隊", "バトルフィーバーJ", "秘密戦隊ゴレンジャー", "五星戦隊ダイレンジャー"],
        Correct: "秘密戦隊ゴレンジャー",
        selectedAnswer: "",
      },
      {
        id: 2,
        Question: "2022年現在、最新のスーパー戦隊はどれ？",
        Answers: ["機界戦隊ゼンカイジャー", "暴太郎戦隊ドンブラザーズ", "超新星フラッシュマン", "未来戦隊タイムレンジャー"],
        Correct: "暴太郎戦隊ドンブラザーズ",
        selectedAnswer: "",
      },
    ],
    香料クイズ: [
      {
        id: 1,
        Question: "青葉アルコールと称されるグリーンな香りのする化合物はどれ？",
        Answers: ["Hexanol", "cis-3-Hexenol", "trans-2-Hexenol", "cis-3-Hexenal"],
        Correct: "cis-3-Hexenol",
        SelectedAnswer: "",
      },
      {
        id: 2,
        Question: "コーヒーの香りに重要だが不安定な化合物はどれ？",
        Answers: ["Guaiacol", "Pyridine", "Citral", "Furfuryl mercaptan"],
        Correct: "Furfuryl mercaptan",
        SelectedAnswer: "",
      },
    ],
  });

  return (
    <div className="w-full max-w-2xl px-2 py-16 sm:px-0 rounded-xl">
      <Tab.Group manual>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {/* Object.keys()メソッドでオブジェクトのプロパティ名を配列として取得し、その配列に対してmapメソッドで指定した処理を行う */}
          {Object.keys(categories).map((category) => (
            <Tab
              // keyがないとエラー→なんのためにkeyがあるのかわからなかったが、公式に
              // Keys help React identify which items have changed, are added, or are removedとあった
              key={category}
              className={({ selected }) => classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2", selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white")}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames("rounded-xl bg-white p-3", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2")}>
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative rounded-md p-3 ">
                    <h3 className="text-sm font-medium leading-5">                          {`${post.id}. ${post.Question}`}</h3>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      {/* 自作できた！！！ 2022/6/8 →ここをradio buttonにしたい→できた？ 2022/6/10 */}
                        <Test key={post.id} Answers={post.Answers} />
                    </ul>
                    {/* <a href="#" className={classNames("absolute inset-0 rounded-md", "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2")} /> */}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
