import styled from 'styled-components';


export const ContainerFluid = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    @media (min-width: 600px) {
        width: 80%;
        max-width: 1280px;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 10px;
    }
`;

export const Post = styled.div`
    text-align: center;
    .news {
        font-size: 2.2rem;
    }
`;

export const Container = styled.div`
    margin: 10px auto;
    width: 100%;
    max-width: 527px;
    position: relative;
    display: flex;
    flex-direction: row;
    box-shadow: 2px 2px 2px 2px var(--bg-project);
    align-items: center;
    img {
        height: 200px;
        width: 200px;
        max-width: 100%;
        object-fit: cover;
        padding: 5px 10px;
        margin: 20px auto 0 0;
    }

    @media screen and (max-width: 930px) {
        flex-direction: column;
        img {
            margin: 0;
            width: 200px;
        }
    }

    @media screen and (max-width: 600px) {
        width: 80vw;
        max-width: 400px;
    }

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 327px;
    h1 {
        text-align: center;
        font-size: 2rem;
    }

    p {
        text-align: justify;
        font-size: 1.6rem;
        padding: 5px 12px;
        height: 118px;
        overflow-y: auto;
::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
    margin-right: 3px;
}
::-webkit-scrollbar-thumb {
    background: var(--circle-color);
}
    }

    span {
        font-size: 1.5rem;
        display: flex;
        justify-content: flex-end;
        margin: 10px 10px 0 10px;
    }

    @media (max-width: 500px) {
        span {
            margin: 10px 10px;
        }
    }
`;