import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding:0;
 
    background-color: #000;
    color:#fff;
    font-size: 10px;
    font-family: 'DM Sans', sans-serif;
}
a{
    text-decoration:none;
    color:#fff;
    margin-bottom: 3px;
}
a:hover{
    color:#666;
    transition: all 0.3s ease-in-out;

}

 
    
    
    
    `;

export default GlobalStyle;
