import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html, #root {
        height: 100%;
        overflow-x: hidden;
        background-color: #f4f9ff;
        flex: 1 0 auto;
        scroll-behavior: smooth;
    }

    input, button {
        outline: 0;
        border: 0; 
    }


    .title {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }

    .not-title {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;      
        line-height: 1.5;
    }
    
    :root {
        font-size: 60%;
        --bg-welcome: #f4f9ff;
        --bg-project: #042f3c;
        --font-color: #fd624c;
        --circle-color: #fd624c;
        --footer-info: #2F4858;
        --footer-color: #042f3c;
        --facebook-color: #4267B2;
        --googleplus-color: #DB4A39;
        --twitter-color: #1DA1F2;
        --linkedin-color: #2867B2;
        --dribbble-color: #ea4c89;
        @media (min-width: 767px) {
            font-size: 62.5%;
        }
    }
    ul {
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }


    .titleGeneral {
        color:black;
        margin: 5% 0 3% 0;
        font-family: 'Roboto', sans-serif;
        font-size: 3rem;
        text-align: center;
        margin-top:9rem;
    
        @media (max-width: 740px) and (orientation: landscape) {
            font-size: 2.75rem;
        }
    }
    

`;
