import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Container,
    Card,
    Front,
    Back,
    CardHeader,
    CardBody,
    Radius,
    Photo,
    Title,
    Swap,
    Description,
    Contact,
    Linkedin,
    Github,
    Instagram
} from '../Members/styles';


function DisabledMembers () {


    const [data, setData] = useState({ usuarios: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://fabsoftwareitp.000webhostapp.com/api/usuariosPorStatus/desativado',
            );

            setData(result.data);
        };

        fetchData();
    }, []);
    let membros = data.usuarios;

    const [isFlipped, setIsflipped] = useState();
    const handleClick = (cardid) => {
        setIsflipped(cardid);  
    }
    
    return (
        <>
        <Title className="titleGeneral"> Ex-Integrantes da Equipe</Title>
        <Container>
            {membros.map((membro, posicao) => {
                return (
                    
                    <Card key={membro.idMembro} isFlipped={isFlipped === membro.idMembro} flipDirection="horizontal">
                        <Front onClick={() => handleClick(membro.idMembro)}>
                            <CardHeader />
                            <CardBody>
                                <Radius>
                                    <Photo src={membro.fotoPerfil} alt="foto_de_perfil:" />
                                </Radius>
                                <Title className="title" FontSize={2.2}> {membro.nome} </Title>
                                {/* <Graduate className="not-title"> {membro.Graduation} </Graduate> */}
                                <Swap className="swap"/>
                            </CardBody>
                        </Front>
                        <Back onClick={handleClick}>
                            <CardHeader>
                                <Title className="title" FontSize={1.9}> {membro.nome} </Title>
                            </CardHeader>
                            <CardBody>
                                <Description className="not-title">
                                    {membro.descricao}
                                </Description>
                                <Contact>
                                    <a href={membro.Linkedin} target="_blank" ><Linkedin /> </a>
                                    <a href={membro.Github} target="_blank" > <Github /> </a>
                                    <a href={membro.Instagram} target="_blank" ><Instagram /> </a>
                                </Contact>
                                <Swap className="swap" />
                            </CardBody>
                        </Back>
                    </Card>
                )
            })}

        </Container>
        </>
    )
}
export default DisabledMembers;
