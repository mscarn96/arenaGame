import React from "react";
import styled from "styled-components";
import StartMenu from "./components/startMenu/StartMenu";

const AppContainer = styled.div`
  width: 75%;
  height: 75%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
function App() {
  return (
    <AppContainer className="App">
      <StartMenu />
    </AppContainer>
  );
}

export default App;
