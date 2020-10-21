import styled from 'styled-components';


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
`;

export const Post = styled.div`
    text-align: center;
    .news {
        font-size: 2.2rem;
    }
`;

export const Container = styled.div`
    margin: 30px auto;
    position: relative;
    display: flex;
    flex-direction: row;
    background: red;
    align-items: center;
    img {
        height: 200px;
        width: 200px;
        max-width: 100%;
        object-fit: cover;
        padding: 5px 10px;
        margin: 20px auto 0 auto;
    }

    @media (max-width: 930px) {
        flex-direction: column;
        img {
            margin: 0;
            width: 200px;
        }
    }
`;

export const Content = styled.div`
    h1 {
        text-align: center;
        font-size: 2rem;
    }

    p {
        text-align: justify !important;
        font-size: 1.6rem;
        padding: 5px 12px;
        height: 118px;
        overflow-y: auto;
    }

    span {
        font-size: 1.5rem;
        display: flex;
        justify-content: flex-end;
        margin: 0px 10px;
    }

    @media (max-width: 500px) {
        span {
            margin: 10px 10px;
        }
    }
`;