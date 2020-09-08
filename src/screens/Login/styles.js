import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-image: linear-gradient(to right, #3a6186, #89253e);
    h1 {
        color: white;
    }
`;

export const Form = styled.form`
    margin: 20px 0;
    background-color: white;
    padding: 30px 25px;
    border-radius: 5px;
`;

export const GroupInput = styled.div`
    position: relative;
    margin-bottom: 20px;
    label {
        font-size: 14px;
        color: rgba(0,0,0,0.6);
        position: absolute;
        top: 10px;
        left: 2px;
        transition: .5s ;
    }
`;

export const Input = styled.input`
    width: 100%;
    display: flex;
    margin-top: 8px;
    padding: 7px;
    font-size: 16px;
    color: var(--footer-color);
    border-radius: 2px;
    border-bottom: 1px solid #3a6186;
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

export const Button = styled.button`
    display: block;
    width: 100%;
    border: none;
    background-image: linear-gradient(-45deg, #3a6186, #89253e );
    border-radius: 30px 0 30px 0;
    transition: all ease 1s;
    /* background-size: 400% 400%; */
    /* background-position: 0 0; */
    color: white;
    margin: auto;
    padding: 7px;
    cursor: pointer;
    &:hover {
        border-radius: 0 30px 0 30px;
        background-image: linear-gradient(-45deg, #89253e, #3a6186 );
    
        /* background-position: 100% 50%; */
    }
`;

// http://uigradients.com/#LoveCouple

    // 3a6186, 89253e
    // ff7e5f, feb47b