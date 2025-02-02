import { createGlobalStyle } from "styled-components";
import backgroundImg from "../../images/background.webp";

const gray = "#3B3F44";
const lighterBlue = "#90B4AC";
const white = "#EBE4D6";
const lightBlue = "#7EA4AA";
const darkBlue = "#343947";

export const colors = {
  gray,
  lighterBlue,
  white,
  lightBlue,
  darkBlue,
};

export const ButtonStyles = `
background: transparent;
  border: 1px solid ${colors.lighterBlue};
  border-radius: 5px;
  color: ${colors.lighterBlue};
  cursor:pointer;
`;

const GlobalStyle = createGlobalStyle`
 * {
   font-size:1rem;
 }

 html {
   font-size:16px;
 }
  body {
    margin: 0;
    padding: 0;
    background-image:url(${backgroundImg});
    background-repeat: no-repeat;
    background-size:auto;
    background-position: top center;
    overflow:hidden;
  }
  .App {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color:rgba(59, 63, 68, 0.75);
    color:${white};
    font-family: 'Redressed', serif;
    font-size:18px;
    box-shadow: 0px 0px 10px 5px rgba(59, 63, 68, 0.8);
    overflow:hidden;
  }

  button {
    cursor:pointer;
  }
  .game {
    height:100vh;
    padding:2% 0;
  }
  .Toastify__toast {
    margin:15px;
    width:75%;
  }

  #info h1 {
    margin: 25px 10px 10px;
  }

  #info p {
    font-size: 0.8rem;
    margin: 25px 10px 10px;
  }

  #info button {
    font-size: 0.8rem;
  }

  @media (min-width:768px) {

    html {
      font-size:18px;
    }

    .App {
      width:75%;
    }

    .Toastify__toast-container {
      width:90%;
      height:15%;
    }

    .Toastify__toast-body {
      font-size:24px;
    }
  }

  @media (min-width:1024px) {
    html {
      font-size:22px;
    }
    .App {
      width:60%;
    }

    .Toastify__toast-body {
      font-size:30px;
    }
  }

  
`;

export default GlobalStyle;
