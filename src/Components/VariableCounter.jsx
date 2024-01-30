/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { increment, decrement } from "../Redux/Counter/actions";
import {
  increment as dynamicIncrement,
  decrement as dynamicDecrement,
} from "../Redux/DynamicCounter/actions";

const VariableCounter = ({ count, increment, decrement }) => {
  return (
    <>
      <section>
        <div className=" flex justify-center py-5 items-center text-center">
          <button className=" btn text-3xl font-medium">{count}</button>
        </div>
        <div className=" flex items-center gap-8 justify-center">
          <button onClick={increment} className=" btn btn-primary">
            Increment
          </button>
          <button onClick={decrement} className=" btn btn-warning">
            Decrement
          </button>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? () => dispatch(dynamicIncrement(5))
      : () => dispatch(increment()),
    decrement: ownProps.dynamic
      ? () => dispatch(dynamicDecrement(3))
      : () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
