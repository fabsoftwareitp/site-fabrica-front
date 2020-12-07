import React from 'react';
import Video from '../Video';
import {
    Container,
    Title,
    Description,
    Advantages,
    Oportunities,
    Circle,
    Desc,
    Bar
} from './styles';


function About () {

    // const [imageGalleryIndex, setImageGalleryIndex] = useState(0);
    // const [data, setData] = useState({ galeria: [] });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(
    //             'https://fabsoftwareitp.000webhostapp.com/api/galeria',
    //         );

    //         setData(result.data);
    //     };

    //     fetchData();
    // }, []);
    // let gallery = data.galeria;
    // console.log(data.galeria);
    return (
        <>
        <Container>
            <Bar />
            <Title className="title" id="sobre"> Sobre o projeto </Title>
            <Description className="not-title"> A Fábrica de Software é uma iniciativa liderada pelo Prof. Me. Danilo Camargo Bueno, e têm como objetivo o desenvolvimento, a prática e a evolução nos âmbitos da criação de software. Neste sentido, os participantes do projeto podem ter, dentre outras, as seguintes oportunidades:
            </Description>
        </Container>
        <Advantages>
            <Oportunities>
                <Circle />
                <Desc className="title">Conhecer diferentes tecnologias</Desc>
            </Oportunities>
            <Oportunities>
                <Circle />
                <Desc className="title">Enfrentar desafios reais</Desc>
            </Oportunities>
            <Oportunities>
                <Circle />
                <Desc className="title">Trabalhar em equipe</Desc>
            </Oportunities>
        </Advantages>
        
        <Container>
        <Title className="title" id="sobre"> Depoimentos </Title>
        <div className="depoimentos">
            <Video src="https://www.youtube.com/embed/B1bys3rAuL8" member="Rafael Damiam"></Video>
            <Video src="https://www.youtube.com/embed/D054k8JNOm4" member="João Moraiz"></Video>
            <Video src="https://www.youtube.com/embed/sDcW1keRIDs"></Video>
            <Video src="https://www.youtube.com/embed/aw3LTiobEYs"></Video>
        </div>
        </Container>

        {/* <Gallery>
            <h1 className="title gallery"> Galeria </h1> 
            <ContainerTeam>
                <header className="header">
                    <h1 className="title"> {gallery.ano} </h1>
                    <img className="frame" src={gallery.imagem} alt="frame" />
                </header>
                <GridGallery>
                    {gallery.map((image, index) => {
                        return (
                            <ImagesButton 
                            type="button"
                            className={imageGalleryIndex === index ? 'active' : ''} 
                            key={index} 
                            onClick={() => {
                                setImageGalleryIndex(index);
                            }}>
                                <img src={image.imagem} alt="galeria" />
                            </ImagesButton>

                        );
                    })}
    
                </GridGallery>
            </ContainerTeam>
        </Gallery> */}
        </>
    )
}

export default About;