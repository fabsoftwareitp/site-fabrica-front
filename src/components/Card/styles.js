import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px auto;
    position: relative;
    width: 500px;
    max-width: 90vw;
    display: flex;
    flex-direction: column;
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

    @media (min-width: 500px) {
        flex-direction: row;
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
    }

    span {
        font-size: 1.5rem;
        display: flex;
        justify-content: flex-end;
        margin: 0px 10px ;
    }

    @media (max-width: 500px) {
        span {
            margin: 10px 10px;
        }
    }
`;