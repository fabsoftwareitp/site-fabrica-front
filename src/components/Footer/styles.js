import styled, { css } from 'styled-components';

import FacebookIcon from '../../images/icones/facebook.png';
import GithubIcon from '../../images/icones/github.png';
import TwitterIcon from '../../images/icones/twitter.png';
import DribbbleIcon from '../../images/icones/dribbble.png';

export const Container = styled.div`
    color: #fff;
    background-color: var(--footer-info);
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding-bottom: 30px;
    margin-top: 60px;
    @media screen and (max-width: 625px) {
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width: 625px) and (max-width: 810px) {
        display: flex;
        justify-content: space-evenly;
    }
`;

export const Members = styled.div`
    grid-column: 1;
`;

export const Title = styled.h1`
    font-size: 2.4rem;
    text-align: center;
    margin-top: 25px;
    font-weight: bold;
`;

export const Grid = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;

`;

export const TeamA = styled.div`
    @media screen and (min-width: 625px) and (max-width: 810px) {
        margin-right: 30px;
    }
`;

export const TeamB = styled.div`
    @media screen and (min-width: 625px) and (max-width: 810px) {
        margin-left: 30px;
    }
`; 

export const Names = styled.p`
    font-size: 2rem;
    @media (max-width: 740px) and (orientation: landscape) {
        font-size: 1.7rem;
    }
`;

export const SocialMedia = styled.div`
    grid-column: 2;
`;

export const Socials = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    @media screen and (max-width: 625px) {
        margin-bottom: 20px;
    }
    
    @media screen and (min-width: 625px) and (max-width: 850px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin: 20px auto 0 auto;
    }
`;

const IconCSS = css`
    cursor: pointer;
    background-size: 100%;
    width: 4rem;
    height: 3.9rem;
    border-radius: 20px;
    &:hover {
        filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
    }

    @media (max-width: 600px) {
        width: 4.5rem;
        height: 4.4rem;    
    } 
`;

export const Facebook = styled.div`
    background-image: url(${FacebookIcon});
    ${IconCSS};
    @media screen and (min-width: 625px) and (max-width: 850px) {
        grid-column: 1;
        grid-row: 1;
    }   
`;

export const Twitter = styled.div`
    background-image: url(${TwitterIcon});
    ${IconCSS};
`;

export const Github = styled.div`
    background-image: url(${GithubIcon});
    ${IconCSS};
    filter: invert(100%);  
`;

export const Dribbble = styled.div`
    background-image: url(${DribbbleIcon});
    ${IconCSS};
`;

export const Made = styled.div`
    grid-column: 3;
    text-align: center;
`;

export const Logo = styled.img`
    padding-top: 20px;
    width: 100px;
`;

export const ContentFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--footer-color);
    span {
        margin: 20px 0 10px 0;
        color: rgba(255,255,255,0.6);
        font-size: 14px;
        @media screen and (max-width: 475px) {
            text-align: center;
        }
    }
`;
