import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
`;

export const Gallery = styled.div`

    .gallery {
        text-align: center;
        font-size: 2.2rem;
    }
`;

export const Bar = styled.div`
    height: 20px;
    width: 100%;
    background: var(--circle-color);
`

export const Title = styled.h1`
    margin: 5% 0 3% 0;
    font-family: 'Roboto', sans-serif;
    font-size: 3rem;
    text-align: center;

    @media (max-width: 740px) and (orientation: landscape) {
        font-size: 2.75rem;
    }
`;

export const Description = styled.p`
    margin-top: 2%;
    width: 70%;
    font-size: 2rem;
    text-align: center;
    @media screen and (max-width: 988px) {
        text-align: justify;
    }
    
    @media (max-width: 850px) and (orientation: landscape) {
        font-size: 1.8rem;
    }
`;

export const Advantages = styled.div`
    display: grid;
    grid-gap: 50px;
    height: auto;
    width: 70%;
    margin: 30px auto;
    justify-content: space-around;
    
    @media screen and (min-width: 320px) {
        grid-template-columns: repeat(1,1fr);
    }
    @media screen and (min-width: 550px) {
        grid-template-columns: repeat(2,1fr);
    }
    @media screen and (min-width: 740px) {
        grid-template-columns: repeat(3,1fr);
    }


`;

export const Oportunities = styled.div`
    display: grid;
    height: auto;
    justify-content: center;
`;

export const Circle = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    justify-self: center;
    background-color: var(--circle-color);
`;

export const Desc = styled.h1`
    margin-top: 20px;
    font-size: 2rem;
    text-align: center;
    @media (max-width: 750px) and (orientation: landscape) {
        font-size: 1.8rem;
    }
    
`;

export const ContainerTeam = styled.div`
    position: relative;
    height: 500px;
    width: 50%;
    background-color: orange;
    margin: 50px auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 2rem;
        margin: 20px auto;
        text-transform: uppercase;
    }

    img {
        /* z-index: 5; */
        width: 300px;
        max-width: 96%; 
        height: 300px;
    }

    @media (max-width: 780px) {
        img {
            margin: 0 auto;
        }
        flex-direction: column;
        height: auto;
        width: 90vw;
    }
`;

export const GridGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin: 20px auto;
    @media screen and (max-width: 410px) {
        grid-template-columns: repeat(3, 1fr);
        margin: 20px auto;
        display: flex;
        align-self: center;
        justify-self: center;
    }
`;

export const ImagesButton = styled.button`
    img {
        height: 60px;
        width: 60px;
        border-radius: 30px;
    }
    width: 70px;
    height: 70px;
    border-radius: 25px;
`;

export const Blue = styled.div`
    position: absolute;
    top: 82px;
    width: 65vw;
    height: 90%;
    background-color: var(--bg-project);
    z-index: -1;
    border-radius: 20px;

    @media (max-width: 580px) {
        display: none;
    }
`;