import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 50px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    max-width: 1920px;
    margin: 0 auto;

`;

export const TitleGroup = styled.h1`
    text-align: center;
    margin: 50px auto;
`;

export const Group = styled.div`
    border-right: 1px solid #000;
    padding: 0 10px 0 10px;
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5%;
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
    span {
        display: flex;
        align-self: center;    
    }

    button {
        background-color: var(--circle-color);
        width: 80%;
        &:hover {
            background-color: #ff9c05;
        }
    }

    button + button {
        background-color: #29417d;
        &:hover {
            background-color: var(--bg-project);
        }
    }
    margin-top: 30px;
    border-top: 1px solid #3a6186;
    padding-top: 20px;   
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    background-color: #009138;
    color: #fff;
    font-weight: bold;
    margin: auto;
    padding: 15px 0;
    position: relative;
    transition: .5s;
    cursor: pointer;
    &:hover {
        background-color: #006e2b;
    }
`;

export const EditGroup = styled.div`

`;

export const GridForm = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5%;
    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Textarea = styled.textarea`
    margin-top: 8px;
    padding: 7px;
    font-size: 16px;
    color: var(--footer-color);
    outline-color: var(--footer-color);
    &:focus ~ label, &:valid ~ label {
        top: -10px;
        left: 0;
        font-size: 12px;
        color: #000;
    }

    &:focus, &:valid {
        border-bottom: 2px solid #224d75;
    }

`;