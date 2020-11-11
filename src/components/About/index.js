import React from 'react';
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
            <Description className="not-title"> Fárica de Softwares foi uma iniciativa liderada pelo Me. Danilo Camargo Bueno,
                teve como principais pilares: O desenvolvimento, prática e evolução nos âmbitos da criação de
                sistemas. Os participantes do projeto podem ter as seguintes oportunidades.
            </Description>
        </Container>
        <Advantages>
            <Oportunities>
                <Circle />
                <Desc className="title">Conhecer novos desafios e diferentes tecnologias</Desc>
            </Oportunities>
            <Oportunities>
                <Circle />
                <Desc className="title">Festinha todo mês, só falto a breja, mas ta valendo</Desc>
            </Oportunities>
            <Oportunities>
                <Circle />
                <Desc className="title">Pegar os lanches da turma da tarde na CAE</Desc>
            </Oportunities>
        </Advantages>
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