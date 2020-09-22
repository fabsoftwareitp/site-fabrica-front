import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
    background-color: var(--bg-project);
    @media (max-width: 550px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Content = styled.div`
    position: relative;
    min-width: 100%;
    display: grid;
    height: 350px;
    max-height: 100%;
    grid-template-columns: repeat(2, 1fr);
    transition: .5s ease-in-out;
    #pages {
        position: absolute;
        top: 96%;
        left: 50%; 
        transform: translate(-50%, -50%); 
        text-align: center;
        color: #fff;
        margin-bottom: 1vh;
    }

    @media (max-width: 580px) {
        display: flex;
        flex-direction: column;
        #pages {
            visibility: hidden;
        }
    }
    

`;

const ButtonCSS = css`
    background-color: var(--bg-project);
    color: #fff;
    height: 100%;
    cursor: pointer;
    &:hover {
        background-color: rgba(0,0,0,0.7);
    }

    @media (max-width: 580px) {
        width: 10%;
    }
`;


export const PreviewButton = styled.button`
    ${ButtonCSS};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 5%;

`;

export const AboutProject = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 0 auto 1px auto;
    height: 100%;
    color: #fff;
    font-size: 1.65rem;
    z-index: 5;
    #pagesmob {
        display: none;
    }

    p {
        text-align: justify;
        margin-bottom: 20px;
    }

    @media (max-width: 580px) {
        margin: 0 auto 10% auto;
        justify-content: center;
        align-items: center;
        img {
            margin: 20px auto;
            width: 70px;
        }
        #pagesmob {
            display: unset;
        }
    }

    img {
        max-width: 125px;
        width: 100px;
        height: 100px;
        padding-bottom: 15px;
        margin: 20px auto 10px auto;
    }

    @media (max-width: 750px) and (orientation: landscape) {
        margin-left: 45px;
    }

    @media (max-width: 440px) {
        width: 80%;
        img {
            padding: 0;
        }
    }

`;

export const AccessProject = styled.button`
    display: block;
    width: 100%;
    max-width: 250px;
    height: 50px;
    background-color: #031d8f;
    padding: 10px 0;
    border-radius: 10px;
    margin: 0 auto 10px auto;
    cursor: pointer;
    &:hover {
        background-color: #496afc;
    }
    transition: .5s;
    span {
        color: #fff;
    }
`;

export const BackImg = styled.div`
    margin: 20px 10% 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 200px;
        max-width: 100%;
    }

    @media (max-width: 580px) {
        display: none;
    }

    @media (max-width: 750px) and (orientation: landscape) {
        margin-left: 45px;
        img {
            width: 150px;
        }
    } 
`;


export const NextButton = styled.button`
    ${ButtonCSS};
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 5%;
`;

export const NextPage = styled.div`
    margin-top: 100px;
    color: #fff;
`;
