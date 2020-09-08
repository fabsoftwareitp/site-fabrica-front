import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import projects from '../../projects.json';


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

    let slider = projects.projects;
    const [x, setX] = useState(0);

    const preview = () => {
        x === 0 ? setX(-100 * (slider.length - 1)) : setX(x + 100);
    }

    const next = () => {
        x === -100 * (slider.length - 1) ? setX(0) : setX(x - 100);
    }
    // useEffect(() => {
    // axios.get("http://localhost/siteFabrica/projeto/show")
    //     .then((response) => {
    //         let projetos = response.data
    //         console.log(projetos);
    //     })
    // }, [])
    return (
<>
<Container>
        {slider.map((project, index) => {
            return (

            <Content key={index} style={{ transform: `translateX(${x}%)` }}>
                <AboutProject>
                    <img src={project.logo} alt="logo_do_projeto" /> 
                    <p>{project.description} </p>
                    <AccessProject>
                        <a href={project.link} rel="noopener noreferrer" target="_blank"><span> Acesse, {project.name} </span> </a>
                    </AccessProject>
                <span id="pagesmob"> 0{index + 1} _________ 0{slider.length}</span>
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