import React, {Component} from 'react';


import { GridWelcome, Container } from './styles';
import SidebarIcons from '../SidebarIcons';
import Logo from '../../images/Logo.png';

class Welcome extends Component {
    render() {
        return (
        <>
            <GridWelcome>
                    <SidebarIcons />
                    <Container> 
                        <div>
                            <h1 className="title"> Fábrica De Softwares </h1>
                            <button className="not-title"> Projetos </button>
                        </div>
                            <img src={Logo} alt="logo do fábrica" /> 
                    </Container>
            </GridWelcome>

        </>
        );
    }
}

export default Welcome;