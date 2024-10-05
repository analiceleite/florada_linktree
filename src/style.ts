import styled,{ createGlobalStyle } from "styled-components";

export const colors = {
    black: 'black',
    white: '#ffff',
    light: '#D3C6E3',
    primary: '#AA96DB',
    secondary: '#863584',
    terciary: '#4B2C6E',
    gradient: 'linear-gradient(135deg, #A68FC9, #A37DB8, #6B2D7B, #7C2C6C)',
    card: '#F8F6F5',
}

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Comfortaa', sans-serif;
    }
`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: ${colors.gradient};
`

