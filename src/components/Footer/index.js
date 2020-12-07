import React, { Component } from 'react';

import logo from '../../images/logo-oficial.png';

import { 
    Container,
    Members,
    Title,
    Grid,
    TeamA,
    Names,
    TeamB,
    SocialMedia,
    Socials,
    Facebook,
    Twitter,
    Github,
    Dribbble,
    Made,
    Logo,
    ContentFooter
} from './styles'; 


class Footer extends Component {
    render() {
        return (
            <>
            <Container id="contato">
                <Members>
                    <Title className="title"> Dedicado aos Membros </Title>
                    <Grid>
                        <TeamA className="not-title">
                            <Names> Pedro Gois </Names>
                            <Names> Vinicius Zevarex </Names>
                            <Names> Bruno Schanoski </Names>
                            <Names> Samuel Fachetti </Names>
                        </TeamA>
                        <TeamB className="not-title">
                            <Names> João Morais </Names>
                            <Names> Rafael Damiam </Names>
                            <Names> Lucas Cavalherie </Names>
                            <Names> Neemias Borges </Names>
                        </TeamB>
                    </Grid>
                </Members>
                <SocialMedia>
                    <Title className="title"> Contato </Title>
                    <Socials>
                        <Facebook />
                        <Twitter /> 
                        <Github />
                        <Dribbble />
                    </Socials>
                </SocialMedia>
                <Made>
                    <Title className="title"> Desenvolvido Por: </Title>
                    <a href="https://ic.itp.ifsp.edu.br">
                    <Logo src={logo} alt="Logo_Fábrica" />
                    </a>
                </Made>
            </Container>
            <ContentFooter className="not-title">
                <span>Copyright &#169; 2020 Fábrica de Softwares ITP - IFSP - Todos os direitos reservados</span>
            </ContentFooter>
            </>
        )
    }
}


export default Footer;