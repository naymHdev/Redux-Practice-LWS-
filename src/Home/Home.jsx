import DynamicHooksCounter from "../Components/DynamicHooksCounter";
import HooksCounter from "../Components/HooksCounter";
import VariableCounter from "../Components/VariableCounter";
const Home = () => {
  return (
    <>
      <HooksCounter />
      <p>DynamicHooksCounter</p>
      <DynamicHooksCounter />
      <p>VariableCounter</p>
      <VariableCounter />
      <VariableCounter dynamic />
    </>
  );
};

export default Home;
