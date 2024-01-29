/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { increment, decrement } from "../Redux/Counter/actions";

const Counter = ({ count, increment, decrement }) => {
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

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
