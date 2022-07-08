import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #0066ff;
        --cinza: #444;
        --black: #333;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
        --shape2: #00000040;
        --shape3: #00000080;
        --orange: #e6b800;
        --ciano: #33ccff;
        --purple: #ac00e6;
        --pink: #ff33cc;
        --wa: #25D366;
        --fb: #4267B2;
        --tv: #128c7e;
        --ig: #128c7e;
        --st: #128c7e;
        --pt: #128c7e;
        --ra: #128c7e;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, select, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #e8e1e1;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: var(--text-body);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    .center {
        text-align: center;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    .success {
        color: var(--green);
    }

    .danger {
        color: var(--red);
    }
`