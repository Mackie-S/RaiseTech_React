// RadioButtonコンポーネントのテスト

import { RadioGroup } from "@headlessui/react";

export const RadioShowAnswers = (props) => {

  // onChange={(key,index,value) => console.log(key,index,value)} この書き方だとkeyしか拾ってこない

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        {/* props.inputAnswerの第一引数は仮で入れている */}
        <RadioGroup value={props.SelectedAnswer} onChange={(value) => {
          console.log(props.inputAnswer(props.Answers,props.index,value))
        }}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {props.Answers.map((Answer) => (
              <RadioGroup.Option
                key={Answer}
                value={Answer}
                checked={Answer === props.SelectedAnswer}
                className={({ active, checked }) =>
                  `${active ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300" : ""}
                  ${checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label as="p" className={`font-medium  ${checked ? "text-white" : "text-gray-900"}`}>
                            {Answer}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        {props.isShowAnswers && props.selected && <p className="text-lg text-center mt-9">{props.Correct === props.selected ? "正解🙆‍♂️" : `不正解🙅‍♂️ 正解は"${props.Correct}"です`}</p>}
      </div>
    </div>
  );
};
// font-size: 20px;
// text-align: center;
// margin-top: 35px;

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
