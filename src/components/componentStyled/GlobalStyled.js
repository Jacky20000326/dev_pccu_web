import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`

    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    html,body{
        scroll-behavior:smooth;
        /* overflow: hidden; */
    }

    li{
        list-style: none;
    }
    hr{
        margin-top: 55px;
    }
    h3{
        font-size: 45px;
    }
    a{
        text-decoration: none;
    }
    
`;
// 此為全域css file
