# RaiseTech_React
This is the assignment repository for the RaiseTech React course.

## 使い方
- ターミナルにて"$ npm start"を入力し、画面を表示
- 「クイズを始める」でクイズが表示される
- 正解と思うものを選び、「集計する」をクリック
- それぞれの問題の下に正解、不正解が表示され、最下部に正答数が表示される
- 「やり直す」で画面リロードされる

## 使用ライブラリ
- dayjs (implemented)
- react-hot-toast (implemented)
- Headless ui (implemented)
  公式サイトのソースコードを元に試してたらTailwindを使っていたのでそこに気づくまでに時間を有した
- Tailwind (implemented)
  エラーの回避などをググりまくってたらかなりの時間を取られた
- husky (implemented) https://github.com/typicode/husky
  現在の設定で良いか不安（本当はlint-stagedと合わせて使いたかった）

## 使用をやめたライブラリ
- lint-staged https://github.com/okonet/lint-staged
  理由: issue溜まりすぎ、huskyの方のissueを確認して、lint-stagedのバージョンアップで不具合が起きてることが確認できたから
- Chakra UI
  理由: headless uiとTailwindで実装できそうだから（いずれ試したい）