import Title from "./components/Title";
import Tabs from "./components/Tabs";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <h1>Tabs</h1>
      <TabContainer>
        <Title />
        <Tabs />
      </TabContainer>
    </>
  );
};

const TabContainer = styled.div`
  background-color: #cedbdf;
`;
export default App;
