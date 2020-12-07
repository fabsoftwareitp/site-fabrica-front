import React, {Component} from 'react';


import { GridWelcome, Container } from './styles';
import SidebarIcons from '../SidebarIcons';
import Logo from '../../images/logo-oficial.png';

class Welcome extends Component {
    render() {
        return (
        <>
            <GridWelcome>
                    <SidebarIcons />
                    <Container> 
                        <div>
                            <h1 className="title"> Fábrica De Software </h1>
                            <h2>IFSP Itapetininga</h2>
                            <a href="#projetos" className="not-title"> Conheça os projetos </a>
                        </div>
                            <img src={Logo} className="logo-oficial" alt=""/> 
                    </Container>
            </GridWelcome>

        </>
        );
    }
}

export default Welcome;