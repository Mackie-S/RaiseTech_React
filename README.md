# RaiseTech_React
This is the assignment repository for the RaiseTech React course.

## 使い方
- ターミナルにて"$ npm start"を入力し、画面を表示
- headerにある「クイズを始める」でクイズが表示される
- 正解と思うものを全て選び、「正答を表示する」をクリックするとそれぞれの問題の下に正解、不正解が表示される
- タブを移動することで別のクイズが表示される（各２問ずつ）
- 「やり直す」で画面リロードされる

## 使用ライブラリ
- dayjs (implemented)
- react-hot-toast (pending)
  まだうまく機能できていない
- Headless ui (implemented)
  公式サイトのソースコードを元に試してたらTailwindを使っていたのでそこに気づくまでに時間を有した
- Tailwind (implemented)
  エラーの回避などをググりまくってたらかなりの時間を取られた
- postcss (implemented)
  Tailwindを使用するために導入
- husky (implemented) https://github.com/typicode/husky
  現在の設定で良いか不安（本当はlint-stagedと合わせて使いたかった）

## 使用をやめたライブラリ
- lint-staged https://github.com/okonet/lint-staged
  理由: issue溜まりすぎ、huskyの方のissueを確認して、lint-stagedのバージョンアップで不具合が起きてることが確認できたから
- Chakra UI
  理由: headless uiとTailwindで実装できそうだから（いずれ試したい）