import Title from "./components/Title";
import styled from "styled-components";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Tabs</h1>
      <TabContainer>
        <Title />
      </TabContainer>
    </>
  );
};

const TabContainer = styled.div`
  width: 700px;
  border: 1px lightgray solid;
  background-color: #fff;
  box-shadow: 2px 2px 10px gray;
`;
export default App;
