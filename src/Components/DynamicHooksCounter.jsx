import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/DynamicCounter/actions";

const DynamicHooksCounter = () => {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };
  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <>
      <section>
        <div className=" flex justify-center py-5 items-center text-center">
          <button className=" btn text-3xl font-medium">{count}</button>
        </div>
        <div className=" flex items-center gap-8 justify-center">
          <button
            onClick={() => incrementHandler(5)}
            className=" btn btn-primary"
          >
            Increment
          </button>
          <button
            onClick={() => decrementHandler(3)}
            className=" btn btn-warning"
          >
            Decrement
          </button>
        </div>
      </section>
    </>
  );
};

export default DynamicHooksCounter;
