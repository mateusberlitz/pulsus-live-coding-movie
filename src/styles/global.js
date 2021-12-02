import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #161E31;
        --blue: #166BCF;

        --text: #dce0eb;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }

        color: var(--text);
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        transition: all 0.3s;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }
`;