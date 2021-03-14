import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../../images/background.jpg'

const gray = "#3B3F44"
const lighterBlue = "#90B4AC"
const white = "#EBE4D6"
const lightBlue = "#7EA4AA"
const darkBlue = "#343947"

export const colors = {
    gray,
    lighterBlue,
    white,
    lightBlue,
    darkBlue
}

export const ButtonStyles= `
background: transparent;
  border: 1px solid ${colors.lighterBlue};
  border-radius: 5px;
  color: ${colors.lighterBlue};
`
 
const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    background-image:url(${backgroundImg});
    background-repeat: no-repeat;
  background-size:auto;
  background-position: top center;
    
  }
  #root {
    padding:5%;
    width: 75%;
    height: 75%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color:rgba(59, 63, 68, 0.75);
    color:${white};
    font-family: 'Redressed', serif;
    font-size:18px;
    box-shadow: 0px 0px 10px 5px rgba(59, 63, 68, 0.8);

  }
`;
 
export default GlobalStyle;