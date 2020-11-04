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
    .pages {
        position: absolute;
        top: 96%;
        left: 50%; 
        transform: translate(-50%, -50%); 
        text-align: center;
        color: #fff;
        margin-bottom: 1vh;
        font-size: 1.6rem;
    }

    @media (max-width: 580px) {
        display: flex;
        flex-direction: column;

        .pages {
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
    height: 350px;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 5;

    .pagesmob {
        visibility: hidden;
    }

    .project-title {
        margin-bottom: 20px;
    }

    .footer-project {
        text-align: center;
    }

    p {
        text-align: justify;
        margin-bottom: 20px;
        font-size: 1.6rem;
        height: 100px;
    }

    @media (max-width: 580px) {
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        img {
            margin: 20px auto;
            width: 70px;
        }

        .pagesmob {
            visibility: visible;
            font-size: 1.4rem;
        }

        p {
            height: 120px;
            overflow-y: auto;
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

        .project-title {
            font-size: 1.7rem;
            text-align: center;
        }

        .footer-project {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
`;

export const AccessProject = styled.button`
    display: block;
    max-width: 100%;
    width: 250px;
    height: 50px !important;
    background-color: var(--circle-color);
    padding: 10px 8px;
    border-radius: 10px;
    margin: 0 auto 10px auto;
    cursor: pointer;
    &:hover {
        background-color: #496afc;
    }
    transition: .5s;
    color: rgba(255,255,255,1);
        /* font-weight: bold; */


`;

export const BackImg = styled.div`
    margin: 20px 10% 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-width: 70%;
        /* max-width: 100%; */
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
