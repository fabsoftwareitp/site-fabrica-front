import styled from 'styled-components';

export const GridWelcome = styled.div`
    display: grid;
    grid-template-areas:
    'Sidebar Text';
    grid-template-columns: 4rem auto;
    @media (min-width: 1400px) {
        height: 500px;
        display: flex;
        justify-content: center;
        
    }

    @media screen and (max-width: 740px) {
        display: flex;
        flex-direction: column-reverse;
        height: 92vh;
    }

    @media (max-width: 750px) and (orientation: landscape) {
        img {
            max-width: 150px;
        }
    } 

`;

export const Container = styled.div`
    grid-area: 'Text';
    display: flex;
    align-items: center;
    align-self: center;
    justify-self: center;
    background-color: var(--bg-welcome);
    height: 500px;
    max-height: 500px;
    justify-content: space-evenly;
    div {
        h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 6rem;
            width: 7em;
            align-self: center;
        }

        h2 {
            margin: .5rem 0 2rem 0;
            color: #545454;
        }

        a {
            border: none;
            background-color: var(--circle-color);
            color: white;
            border-radius: 5px;
            padding: 10px 5px;
            cursor: pointer;
            font-size: 1.5rem;
        }
    }

    img {
        max-width:250px;
    }

    @media screen and (max-width: 740px) {
        height: 82vh;
        flex-direction: column;
        justify-content: center;
        div {
            flex-direction: column;
        justify-content: center;
            h1 {
                font-size: 5rem;
                text-align: center;
            }

            h2 {
                text-align: center;
            }

            a {
                display: block;
                margin:auto;
                margin-bottom: 2rem;
            }
        }

        img {
            width: 200px;
            max-width: 100%;
        }
    }

    @media (max-width: 840px) and (orientation: landscape) {
        flex-direction: row;
        div {
            h1 {
                font-size: 5rem;
            }
        }
    } 
`;

