import React, { useState, useEffect } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Title } from '../Members/styles';

import axios from 'axios';

import {
    Container,
    Content,
    PreviewButton,
    AboutProject,
    AccessProject,
    BackImg,
    NextButton
} from './styles';

function Slider () {

    const [data, setData] = useState({ projetos: [] });
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://fabsoftwareitp.000webhostapp.com/api/projetos',
          );
     
          setData(result.data);
        };
     
        fetchData();
      }, []);

    let slider = data.projetos;
    // console.log(slider);
    const [x, setX] = useState(0);

    const preview = () => {
        x === 0 ? setX(-100 * (slider.length - 1)) : setX(x + 100);
    }

    const next = () => {
        x === -100 * (slider.length - 1) ? setX(0) : setX(x - 100);
    }

    return (
<>
<Container>
        {slider.map((project, index) => {
            return (

            <Content id="projetos" key={index} style={{ transform: `translateX(${x}%)` }}>
                <AboutProject>
                    
                    <Title className="title project-title" FontSize={2}> {project.nome} </Title>
                    <p className="not-title">{project.descricao} </p>
                <div className="footer-project">
                    <AccessProject className="not-title button-project">
                        <a href={project.link} rel="noreferrer" target="_blank"><span>{project.nome}</span> </a>
                    </AccessProject>
                    <span id="pagesmob"> 0{index + 1} _________ 0{slider.length}</span>
                </div>
                </AboutProject>
                <BackImg>
                    <img src={project.logo} alt="logo_do_projeto" />
                </BackImg>
                    <span id="pages"> 0{index + 1} _________ 0{slider.length}</span>
            </Content>
            );
        })}
    <PreviewButton onClick={preview}>
        <NavigateBeforeIcon />
    </PreviewButton>
    <NextButton onClick={next}>
        <NavigateNextIcon />
    </NextButton>
</Container>
</>
    );
}
export default Slider;