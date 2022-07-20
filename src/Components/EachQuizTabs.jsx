import { useState } from "react";
import { Tab } from "@headlessui/react";
import { RadioShowAnswers } from "./RadioShowAnswers";
import { Buttons } from "./Buttons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const EachQuizTabs = (props) => {
  const [isShowAnswers, setIsShowAnswers] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  // 正答表示ボタンを押した際に正答を表示する機能
  const onClickshow = () => {
    setIsShowAnswers(true);
    setIsDisabled(true);
  };

  // tabを移動した時に正答表示ボタンをリセットする機能
  const onChangeMoveTab = () => {
    setIsShowAnswers(false);
    setIsDisabled(false);
  };

  const [categories, setCategories] = useState({
    Reactクイズ: [
      {
        id: 1,
        Question: "Reactを開発したのは誰？",
        Answers: ["Twitter", "Facebook", "mixi", "Brendan Eich"],
        Correct: "Facebook",
        Group: "React",
        SelectedAnswer: "",
      },
      {
        id: 2,
        Question: "Reactのフレームワークでないものはどれ？",
        Answers: ["Next.js", "Remix", "Gatsby", "Gridsome"],
        Correct: "Gridsome",
        Group: "React",
        SelectedAnswer: "",
      },
    ],
    スーパー戦隊クイズ: [
      {
        id: 1,
        Question: "初代のスーパー戦隊はどれ？",
        Answers: ["ジャッカー電撃隊", "バトルフィーバーJ", "秘密戦隊ゴレンジャー", "五星戦隊ダイレンジャー"],
        Correct: "秘密戦隊ゴレンジャー",
        Group: "Ranger",
        SelectedAnswer: "",
      },
      {
        id: 2,
        Question: "2022年現在、最新のスーパー戦隊はどれ？",
        Answers: ["機界戦隊ゼンカイジャー", "暴太郎戦隊ドンブラザーズ", "超新星フラッシュマン", "未来戦隊タイムレンジャー"],
        Correct: "暴太郎戦隊ドンブラザーズ",
        Group: "Ranger",
        SelectedAnswer: "",
      },
    ],
    香料クイズ: [
      {
        id: 1,
        Question: "青葉アルコールと称されるグリーンな香りのする化合物はどれ？",
        Answers: ["Hexanol", "cis-3-Hexenol", "trans-2-Hexenol", "cis-3-Hexenal"],
        Correct: "cis-3-Hexenol",
        Group: "Flavor",
        SelectedAnswer: "",
      },
      {
        id: 2,
        Question: "コーヒーの香りに重要だが不安定な化合物はどれ？",
        Answers: ["Guaiacol", "Pyridine", "Citral", "Furfuryl mercaptan"],
        Correct: "Furfuryl mercaptan",
        Group: "Flavor",
        SelectedAnswer: "",
      },
    ],
  });

  const inputAnswer = (key, quizIndex, answerValue) => {
    const newCategories = { ...categories }; // ググるとObject.assign({}, categories)の書き方が多く出る
    console.log(categories);
    console.log(key)
    console.log(quizIndex)
    console.log(answerValue)
    // 引数のkeyをもとに、categoriesから対象のクイズ種別を取得する（Reactクイズ）
    // const over30List = {};
    // newCategories.forEach((eachQuiz) => {
    //   if (key === eachQuiz) {
    //     over30List.push(eachQuiz);
    //   }
    // });
    

    // const target = (key) => {
    //   for (let i = 0; i < newCategoriesKeys.length; i++) {
    //     if (key === newCategoriesKeys[i]) {
    //       return newCategories[newCategoriesKeys[i]];
    //     }
    //   }
    // }
    // for文だと変数に格納するのが厳しかった

    // まずはnewCategoriesオブジェクトのkeyを配列化
    const newCategoriesKeys = Object.keys(newCategories);

    // 外部から引数で受け取った値を元に条件に合う配列のみ抽出
    const target = newCategoriesKeys.filter((eachQuiz) => key === eachQuiz); // Reactクイズが取得できたのを確認！

    // targetに該当するvalueをnewCategoriesから取得
    const targetValue = newCategories[target]; // Reactクイズのvalue取得完了

    // targetvalueから特定のクイズオブジェクトを取得する
    const quiz = targetValue.find((value, index) => quizIndex === index);

    // quizのSelectedAnswerにanswerValueを設定する
    quiz.SelectedAnswer = answerValue; // shallow copy なのでnewCategoriesもcategoriesも中身の部分が変わる

    setCategories(newCategories);
  };

  return (
    <div className="w-full max-w-2xl px-2 py-16 sm:px-0 rounded-xl">
      <Tab.Group manual onChange={onChangeMoveTab}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {/* Object.keys()メソッドでオブジェクトのプロパティ名を配列として取得し、その配列に対してmapメソッドで指定した処理を行う */}
          {Object.keys(categories).map((category) => (
            <Tab key={category} className={({ selected }) => classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2", selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white")}>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {/* .entriesにしてcategoryを定義したのはpropsを渡したかったから */}
          {Object.entries(categories).map(([category,posts], idx) => (
            <Tab.Panel key={idx} className={classNames("rounded-xl bg-white p-3", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none")}>
              <ul>
                {posts.map((post, index) => (
                  <li key={post.id} className="relative rounded-md p-3 ">
                    <h3 className="text-sm font-medium leading-5"> {`${post.id}. ${post.Question}`}</h3>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      {/* 自作できた！！！ 2022/6/8 →ここをradio buttonにしたい→できた! 2022/6/10 */}
                      <RadioShowAnswers Answers={post.Answers} SelectedAnswer={post.SelectedAnswer} Correct={post.Correct} isShowAnswers={isShowAnswers} index={index} inputAnswer={inputAnswer} category={category} isDisabled={ isDisabled} />
                    </ul>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
          <div className="flex justify-center">
            <Buttons onClick={onClickshow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              正答を表示する
            </Buttons>
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
