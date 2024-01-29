import DynamicHooksCounter from "../Components/DynamicHooksCounter";
import HooksCounter from "../Components/HooksCounter";
const Home = () => {
  return (
    <>
      <HooksCounter />
      <p>DynamicHooksCounter</p>
      <DynamicHooksCounter />
    </>
  );
};

export default Home;
