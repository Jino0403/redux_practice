import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plus } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.counter.number);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(plus(10));
        }}
      >
        버튼
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MINUS", payload: 10 });
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default App;
