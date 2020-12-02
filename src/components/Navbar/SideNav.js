import React from 'react';
import { Ul } from './styles';
import { Link } from 'react-router-dom';

// 
const SideNav = ({ open }) => {
    return (
        <Ul open={open} className="not-title">
            <li><Link to="/noticias"> Notícias </Link> </li>
            <li><a href="/#projetos"> Projetos </a> </li>
            <li><Link to="/"> Início </Link> </li>
            <li><a href="/#sobre"> Sobre </a> </li>
            <li><a href="#contato"> Contato </a> </li>
        </Ul>
    )
}

export default SideNav