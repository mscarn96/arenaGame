import React from "react";
import StartMenu from "./components/startMenu/StartMenu";
import GlobalStyle from "./game/ui/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <StartMenu />
        <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar
          closeOnClick={false}
          closeButton={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
        />
      </div>
    </>
  );
}

export default App;
