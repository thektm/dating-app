import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../Redux/counterSlice";
import { RootState, AppDispatch } from "../Redux/store";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch: AppDispatch = useDispatch();
  

  return (
    <div>
      
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <span className="m-2 p-2 text-black font-bold">{count}</span>
    </div>
  );
};

export default Counter;