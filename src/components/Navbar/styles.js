import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8vh;
    background-color: var(--bg-welcome);
`;

export const Ul = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 35%;

    a {
        color: #000;
        font-size: 1.6rem;
        padding: 10px;
        background-image: linear-gradient(90deg,
            var(--bg-welcome) 0%,
            var(--bg-welcome) 50%,
            var(--bg-project) 50%,
            var(--bg-project) 100%);
        background-size: 200%;
        transition: background-position .3s cubic-bezier(.47, .1, 1, .63), color .2s linear;
        transition-delay: 0.0s, 0.15s;
        &:hover {
            color: #fff;
            cursor: pointer;
            background-position: -100% 100%;
        }
     }

  @media (max-width: 600px) {
    z-index: 5;
    flex-flow: column nowrap;
    background-color: var(--bg-project);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 35%;
    transition: transform 0.5s ease-in;
    li {
        color: #fff;
        background-image: linear-gradient(90deg,
            var(--bg-project) 0%,
            var(--bg-project) 50%,
            var(--bg-welcome) 50%,
            var(--bg-welcome) 100%);
        background-size: 200%;
        transition: background-position .3s cubic-bezier(.47, .1, 1, .63), color .2s linear;
        transition-delay: 0.0s, 0.15s;
        &:hover {
            color: #000;
        }
    }
  }
`;

export const IconToggle = styled.div`
    width: 3rem;
    height: 3rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    @media (max-width: 600px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 3rem;
        height: 0.5rem;
        background-color: ${ ({ open }) => open ? '#000' : '#000' };
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${ ({ open }) => open ? 'rotate(45deg)' : 'rotate(0)' };
        background-color: ${ ({ open }) => open ? '#fff' : '#000' };
        }
        &:nth-child(2) {
            transform: ${ ({ open }) => open ? 'translateX(100%)' : 'translateX(0)' };
            opacity: ${ ({ open }) => open ? 0 : 1 };
            
        }
        &:nth-child(3) {
            transform: ${ ({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)' };
        background-color: ${ ({ open }) => open ? '#fff' : '#000' };
        }
    }
`; 

export const Options = styled.div`
    width: 50px;
    height: 20px;
    background: red;
`;