export const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

// スタートボタン：className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
// やり直すボタン：className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
