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

    .titleNews {
        margin: 1rem 0 2.5rem 0;
        font-size:3rem;
    }
`;


export const ContainerFluid = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;

    .post {
        margin-bottom: 4rem;
        padding: 1rem;
        padding-bottom:4rem;
        border-bottom: solid 1px #042f3c;
    }

    .post img {
        object-fit: cover;
        width:100%;
        height: 60rem;
    }

    .post h2 {
        font-size: 3rem;
    }

    .post h6 {
        font-weight: normal;
        font-size: 1rem;
        margin-top: -0.5rem;
        margin-bottom:1rem;
    }

    .post p {
        font-size: 1.5rem;
    }

    figure, img {
        max-width:100%;
    }
`