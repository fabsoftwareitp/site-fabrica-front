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
                        <Front>
                            <CardHeader />
                            <CardBody>
                                <Radius>
                                    <Photo src={membro.Avatar} alt="foto_de_perfil:" />
                                </Radius>
                                <Title FontSize={24}> {membro.name} </Title>
                                <Graduate> {membro.Graduation} </Graduate>
                                <Swap onClick={() => handleClick(membro.id)} />
                            </CardBody>
                        </Front>
                        <Back>
                            <CardHeader>
                                <Title FontSize={18}> {membro.name} </Title>
                            </CardHeader>
                            <CardBody>
                                <Description>
                                    {membro.Description}
                                </Description>
                                <Contact>
                                    <a href={membro.Linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> </a>
                                    <a href={membro.Github} target="_blank" rel="noopener noreferrer"> <Github /> </a>
                                    <a href={membro.Instagram} target="_blank" rel="noopener noreferrer"><Instagram /> </a>
                                </Contact>
                                <Swap onClick={handleClick} />
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