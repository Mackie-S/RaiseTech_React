import { Questions } from "./Questions";
// import { MyRadioGroup } from "./MyRadioGroup";

// クイズリストをpropsとして渡すコンポーネント

const reactQuizLists = [
  {
    Question: "1.Reactを開発したのは誰？",
    Answers: ["Twitter", "Facebook", "mixi", "Brendan Eich"],
    Correct: "Facebook",
    selectedAnswer: "",
  },
  {
    Question: "2.Reactのフレームワークでないものはどれ？",
    Answers: ["Next.js", "Remix", "Gatsby", "Gridsome"],
    Correct: "Gridsome",
    selectedAnswer: "",
  },
];

const superHeroQuizLists = [
  {
    Question: "3.初代のスーパー戦隊はどれ？",
    Answers: ["ジャッカー電撃隊", "バトルフィーバーJ", "秘密戦隊ゴレンジャー", "五星戦隊ダイレンジャー"],
    Correct: "秘密戦隊ゴレンジャー",
    selectedAnswer: "",
  },
  {
    Question: "4.2022年現在、最新のスーパー戦隊はどれ？",
    Answers: ["機界戦隊ゼンカイジャー", "暴太郎戦隊ドンブラザーズ", "超新星フラッシュマン", "未来戦隊タイムレンジャー"],
    Correct: "暴太郎戦隊ドンブラザーズ",
    selectedAnswer: "",
  },
];

export const Quizzes = () => {
  return (
    <>
      <Questions questionLists={[...reactQuizLists, ...superHeroQuizLists]} />
    </>
  );
};
