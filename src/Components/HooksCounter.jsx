import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Counter/actions";

const HooksCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <>
      <section>
        <div className=" flex justify-center py-5 items-center text-center">
          <button className=" btn text-3xl font-medium">{count}</button>
        </div>
        <div className=" flex items-center gap-8 justify-center">
          <button
            onClick={incrementHandler}
            className=" btn btn-primary"
          >
            Increment
          </button>
          <button
            onClick={decrementHandler}
            className=" btn btn-warning"
          >
            Decrement
          </button>
        </div>
      </section>
    </>
  );
};

export default HooksCounter;
