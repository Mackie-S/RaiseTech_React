// import { useState, useMemo } from "react";
// import { RadioGroup } from "@headlessui/react";

// export const MyRadioGroup = (props) => {
//   const [selected, setSelected] = useState();
//   const [isShowAnswers, setIsShowAnswers] = useState(false);

//   const onClickshow = () => {
//     setIsShowAnswers(!isShowAnswers);
//   };

//   // クイズリストの状態変化を制御するためにuseState使用
//   const [qLIsts,setQLists] = useState(props);

//   // onChangeで使用する 
//   const inputAnswer = (selectedAnswer, targetIndex) => {
//     setQLists(qLIsts.map((list, index) => (index === targetIndex ? { ...list, selectedAnswer } : list)));
//   };

//   const correctAnswers = useMemo(() => qLIsts.filter(({ Correct, selectedAnswer }) => Correct === selectedAnswer).length, [qLIsts]);

//   const variableMessage = () => {
//     if (correctAnswers === 0) {
//       return "残念👋";
//     } else if (correctAnswers === 1) {
//       return "がんばれ💪";
//     } else if (correctAnswers === 2) {
//       return "まだまだ✊";
//     } else if (correctAnswers === 3) {
//       return "もう少し✋";
//     } else if (correctAnswers === 4) {
//       return "おめでとう👏 全";
//     }
//   };

//   return (
//     <div className="w-full px-4 py-16">
//       <div className="mx-auto w-full max-w-md">
//         {qLIsts.map(({ Question, Answers, Correct, selectedAnswer }, index) => {
//           return(
//         <>
//           <RadioGroup value={selected} onChange={setSelected}>
//             <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
//             <div className="space-y-2">
//               <RadioGroup.Option
//                 key={Question}
//                 value={selected}
//                 className={({ active, checked }) =>
//                   `${active ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300" : ""}
//                     ${checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
//                       relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
//                 }
//               >
//                 {({ active, checked }) => (
//                   <>
//                     <div className="flex w-full items-center justify-between">
//                       <div className="flex items-center">
//                         <div className="text-sm">
//                           <RadioGroup.Label as="p" className={`font-medium  ${checked ? "text-white" : "text-gray-900"}`}>
//                             {Question}
//                           </RadioGroup.Label>
//                           <RadioGroup.Description as="span" className={`inline ${checked ? "text-sky-100" : "text-gray-500"}`}></RadioGroup.Description>
//                         </div>
//                       </div>
//                       {checked && (
//                         <div className="shrink-0 text-white">
//                           <CheckIcon className="h-6 w-6" />
//                         </div>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </RadioGroup.Option>
//             </div>
//             {isShowAnswers && selectedAnswer && <p>{Correct === selectedAnswer ? "正解" : "不正解"}</p>}
//             </RadioGroup>;
//             </>
//           )
//         })}
//       </div>
//       <button
//         onClick={() => {
//           onClickshow();
//           // errorMessage();
//         }}
//       >
//         集計する
//       </button>
//       {isShowAnswers && <p> {`${variableMessage()}${correctAnswers}問正解`}</p>}
//     </div>
//   );
// };

// function CheckIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" {...props}>
//       <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
//       <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }
