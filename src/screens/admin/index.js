import React from 'react';
import axios from 'axios';
// import Sidebar from '../../components/Sidebar';

import { Container, Group, List, Button, EditGroup, GridForm, TitleGroup } from './styles';
import { Form, GroupInput, Input } from '../Login/styles';


const API_PATH = 'http://localhost/siteFabrica/projeto/adicionar'; 

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
        nome: '',
        link: '',
        descricao: '',
        logo: '',
        dataInicio: '',
    })
  }


  handleFormSubmit = e => {
    e.preventDefault();
      const fd = new FormData();
    for (let name in this.state) {
      fd.append(name, this.state[name]);
    }


    axios({
      method: 'POST',
      url: `${API_PATH}`,
      headers: { 'content-type': 'multipart/form-data' },
      data: fd
    });
  }


render() {
    return (
      <>
      
        <Container>
          <Group> 
            <TitleGroup> Usuários </TitleGroup>
            <List> 
              <span> João Victor Ferreira de Morais</span>
              <Button type="button"> Editar </Button>
              <Button type="button"> Formado </Button>
            </List>
            <List> 
              <span> João Victor Ferreira de Morais</span>
              <Button type="button"> Editar </Button>
              <Button type="button"> Formado </Button>
            </List>
            <List> 
              <span> João Victor Ferreira de Morais</span>
              <Button type="button"> Editar </Button>
              <Button type="button"> Formado </Button>
            </List>
            <List> 
              <span> João Victor Ferreira de Morais</span>
              <Button type="button"> Editar </Button>
              <Button type="button"> Formado </Button>
            </List>
          </Group>


          <EditGroup>
            <TitleGroup> Formulário Membros </TitleGroup>
            <Form action="#" method="post" enctype="multipart/form-data">
              <GridForm>
                <GroupInput>
                    <Input type="text" id="nome" name="nome" placeholder="" required /> 
                    <label htmlFor="nome">Nome</label>
                </GroupInput>
                <GroupInput>
                    <Input type="email" id="email" name="email" placeholder="" required />
                    <label htmlFor="email">Email</label>
                </GroupInput>
                <GroupInput>
                    <Input type="password" id="senha" name="senha" placeholder="" required />
                    <label htmlFor="senha">Senha</label>
                </GroupInput>
                <GroupInput>
                    <Input type="text" id="status" name="status" placeholder="" required />
                    <label htmlFor="status">Status do Membro:</label>
                </GroupInput>
                <GroupInput>
                    <Input type="text" id="perfil" name="perfil" placeholder="" required />
                    <label htmlFor="perfil">Foto de Perfil: </label>
                </GroupInput>
                <GroupInput>
                    <Input type="text" id="desc" name="descricao" placeholder="" required />
                    <label htmlFor="desc">Descrição</label>
                </GroupInput>
              </GridForm>
                <Button type="submit"> Enviar </Button>
            </Form>
          </EditGroup>
        </Container>

        <Container>
          <Group> 
            <TitleGroup> Projetos </TitleGroup>
            <List> 
              <span> Sistema de Gerenciamento de Eventos </span>
              <Button type="button"> Editar </Button>
              <Button type="button"> Formado </Button>
            </List>
          </Group>


          <EditGroup>
            <TitleGroup> Formulário Projetos </TitleGroup>
            <Form onSubmit={this.handleFormSubmit} enctype="multipart/form-data">
              <GridForm>
                <GroupInput>
                    <Input type="text" id="projeto" name="nome" placeholder=""
                    value={this.state.nome}
                    onChange={e => this.setState({ nome: e.target.value })}
                    required /> 
                    <label htmlFor="projeto">Nome</label>
                </GroupInput>
                <GroupInput>
                    <Input type="text" id="link" name="link" placeholder="" 
                    value={this.state.link}
                    onChange={e => this.setState({ link: e.target.value })}
                    required />
                    <label htmlFor="link">Link</label>
                </GroupInput>
                <GroupInput>
                    <Input type="text" id="descricao" name="descricao" placeholder=""
                    value={this.state.descricao}
                    onChange={e => this.setState({ descricao: e.target.value })}
                    required />
                    <label htmlFor="descricao">Descricao</label>
                </GroupInput>
                <GroupInput>
                    <Input type="file" id="logo" name="logo" placeholder="" 
                    onChange={this.fileSelect} 
                    required />
                    {/* <label htmlFor="logo">logo</label> */}
                </GroupInput>
                <GroupInput>
                  <Input type="date" id="dataInicio" name="dataInicio" placeholder="" 
                    value={this.state.dataInicio}
                    onChange={e => this.setState({ dataInicio: e.target.value })}
                  required />
                </GroupInput>
                
{/* onClick={e => this.handleFormSubmit(e)} */}
              </GridForm>
                <Button type="submit"> Enviar </Button>
            </Form>
          </EditGroup>
        </Container>
      </>
    );
  }
}

export default Dashboard;