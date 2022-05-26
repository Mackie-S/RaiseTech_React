import dayjs from "dayjs";

export const Date = () => {
  const now = dayjs(); // 現在の日付時刻を取得する関数
  const currentDate = now.format("YYYY/MM/DD HH:mm");
  const currentHour = now.hour(); // 時間を取得する関数

  // 5〜17時は太陽マーク、17〜5時は月マークを表示するようにしたいなぁ
  const toggleGreeting = () => {
    if (currentHour >= 5 && currentHour <= 9) {
      return "おはようございます🌞"; // 5~9時台までの挨拶
    } else if (currentHour >= 10 && currentHour <= 17) {
      return "こんにちは🦋"; // 10~17時台までの挨拶
    } else if (currentHour >= 18 || currentHour <= 4) {
      return "こんばんは🌙 "; // 18~4時台までの挨拶
    }
  };

  return (
      <div className="top-5 right-5">
        <p> {toggleGreeting()}</p>
        <p>{`現在は${currentDate} です。`}</p>
      </div>
  );
};
