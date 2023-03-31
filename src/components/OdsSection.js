import React from 'react';
import './OdsSection.scss';

export default function OdsSection() {
  let items = [
    {
      logo: "ODS/ods-1.jpg",
      title: "fin de la pobreza",
      text: "El objetivo busca erradicar la pobreza extrema, medida como personas que viven con menos de $1,90 dólares al día, así como reducir la pobreza en todas sus dimensiones.",
      top: "10%",
      left: "20%",
    },
    {
      logo: "ODS/ods-4.jpg",
      title: "educacion de calidad",
      text: "El objetivo busca mejorar la calidad y accesibilidad de la educación en todo el mundo, desde la educación preescolar hasta la educación superior y la formación técnica y profesional.",
      top: "-3%",
      left: "43%",
    },
    {
      logo: "ODS/ods-9.jpg",
      title: "Industria, Innovacion e infraestructura",
      text: "El objetivo busca mejorar la infraestructura y la tecnología en todo el mundo, apoyando el desarrollo de una industria sostenible e inclusiva, y fomentando la innovación y el desarrollo tecnológico.",
      top: "15%",
      left: "67%",
    },
    {
      logo: "ODS/ods-11.jpg",
      title: "ciudades y comunidades sostenibles",
      text: "El objetivo busca promover la planificación y gestión sostenible de las ciudades y comunidades, mejorando el acceso a servicios básicos, la vivienda y el transporte, y reduciendo la vulnerabilidad de las comunidades a los desastres naturales y el cambio climático.",
      top: "49%",
      left: "69%",
    },
    {
      logo: "ODS/ods-13.jpg",
      title: "accion por el clima",
      text: "El objetivo busca reducir las emisiones de gases de efecto invernadero, aumentar la resiliencia de las comunidades y los ecosistemas al cambio climático, y fomentar la cooperación internacional para abordar este problema global.",
      top: "70%",
      left: "50%",
    },
    {
      logo: "ODS/ods-16.jpg",
      title: "paz, justicia e instituciones sólidas",
      text: "El objetivo busca reducir la violencia, la corrupción y la delincuencia, así como promover la participación ciudadana y el acceso a la justicia y la protección legal.",
      top: "67%",
      left: "25%",
    },
    {
      logo: "ODS/ods-17.jpg",
      title: "alianzas para lograr los objetivos",
      text: "El objetivo busca movilizar los recursos necesarios para lograr los demás objetivos de desarrollo sostenible, incluyendo financiamiento, tecnología, cooperación internacional y acceso a mercados.",
      top: "40%",
      left: "15%",
    },
  ]
  return (
    <div className='ods-section' >
      <h1>Objetivos de Desarrollo Sostenible</h1>  
      <div className='ods-container'>
        {
          items.map((item, i)=>  
            <div 
            className='wrapper'
            style={{top: `${item.top}`, left: `${item.left}`}}
            >
              <img src={item.logo} className='logo' alt={item.title}></img>
              <p className='title'>{item.title}</p>
              <p className='text'>{item.text}</p>
            </div>
          )
        }
        <img src="ODS/ods-title.png" className='main-logo' alt="objetivos de desarrollo sostenible" />
      </div>
    </div>
  )
}
