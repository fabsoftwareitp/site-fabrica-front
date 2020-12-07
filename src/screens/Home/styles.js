import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    overflow-x: hidden;
`;

export const NewsButton = styled.button`
    display: block;
    max-width: 100%;
    width: 250px;
    height: 50px !important;
    background-color: var(--circle-color);
    padding: 10px 8px;
    border-radius: 10px;
    margin: 2rem auto 10px auto;
    cursor: pointer;
    &:hover {
        background-color: #496afc;
    }
    transition: .5s;
    color: rgba(255,255,255,1);
        /* font-weight: bold; */

`;
