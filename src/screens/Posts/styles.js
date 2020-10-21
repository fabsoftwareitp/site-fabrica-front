import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    text-align: center;
    min-height: 50.3vh;
    #footer {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;


export const ContainerFluid = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    width: 90%;
    @media (min-width: 600px) {
        width: 80%;
        max-width: 1280px;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 20px;
    }
`