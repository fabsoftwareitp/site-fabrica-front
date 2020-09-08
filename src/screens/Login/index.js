import React, {Component} from 'react';
import axios from 'axios';  



import { Container, Form, GroupInput, Input, Button } from './styles';



const API_PATH = 'http://localhost/siteFabrica/login/json'; 

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            senha: '',
            dados: [],
        })
    }


    handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: this.state
        })
            .then(result => {   
                this.setState({
                    dados: result.data
                })
                console.log(this.state.dados);
            });
        }

            // .catch(error => this.setState({ error: error.message }));
    render() {
        return (
            <>
            <Container>
                <h1> Entrar </h1>
                <Form action="#" method="post">
                    <GroupInput>
                        <Input type="text" id="email" name="email" placeholder="" 
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                            required /> 
                        <label htmlFor="email">Email</label>
                    </GroupInput>
                    <GroupInput>
                        <Input type="password" id="senha" name="senha" placeholder="" 
                            value={this.state.senha}
                            onChange={e => this.setState({ senha: e.target.value })}
                            required />
                        <label htmlFor="senha">Senha</label>
                    </GroupInput>
                    <Button type="submit" onClick={e => this.handleFormSubmit(e)}> Login </Button>
                </Form>
            </Container>
            </>
        );
    }
}


export default Login;