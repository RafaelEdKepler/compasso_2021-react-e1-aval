import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #001529;
        --secondary: #FFFFFF;

        --link: #A9A9A9;
        --border: #E5E4E2;

        --gray-50: #fafafa;
        --gray-300: #474a51;

        --blue-50: #1890ff;

        --black: #000;
    }

    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Quicksand', sans-serif;
        }
        html {
            @media (max-width: 1080px) {
                font-size: 93.75%;
            }
            @media (max-width: 720px) {
                font-size: 87.5%;
            }
        }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

const SpinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SpinRotate = styled.div`
    animation: ${SpinAnimation} 1s linear infinite;

    svg {
        padding: 0;
        margin: 0;
    }
`;