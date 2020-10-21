import React, { useState } from 'react';
import members from  '../../members.json';

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
    Graduate,
    Swap,
    Description,
    Contact,
    Linkedin,
    Github,
    Instagram
} from './styles';


function Members () {
    let membros = members.Members;

    const [isFlipped, setIsflipped] = useState();
    const handleClick = (cardid) => {
        setIsflipped(cardid);
       
    }
    
    return (
        <>
        <Container>
            {membros.map((membro, posicao) => {
                return (
                    <Card key={membro.id} isFlipped={isFlipped === membro.id} flipDirection="horizontal">
                        <Front onClick={() => handleClick(membro.id)}>
                            <CardHeader />
                            <CardBody>
                                <Radius>
                                    <Photo src={membro.Avatar} alt="foto_de_perfil:" />
                                </Radius>
                                <Title className="title" FontSize={2.2}> {membro.name} </Title>
                                <Graduate className="not-title"> {membro.Graduation} </Graduate>
                                <Swap className="swap"/>
                            </CardBody>
                        </Front>
                        <Back onClick={handleClick}>
                            <CardHeader>
                                <Title className="title" FontSize={1.9}> {membro.name} </Title>
                            </CardHeader>
                            <CardBody>
                                <Description className="not-title">
                                    {membro.Description}
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
export default Members;