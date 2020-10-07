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
    }
    
    :root {
        font-size: 60%;
        --bg-welcome: #f4f9ff;
        --bg-project: #182138;
        --font-color: #a5793d;
        --circle-color: #ffb441;
        --footer-info: #2d3e50;
        --footer-color: #243141;
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

`;
