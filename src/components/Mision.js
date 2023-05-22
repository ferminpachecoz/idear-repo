import React from 'react';
import './Mision.scss';
import aos from 'aos';
import { useEffect } from 'react';

export default function Mision() {
  let items = [
    {
      title: "Misión",
      icon: "mision-cumplida.png",
      text: "Desarrollamos políticas públicas que impacten en la agenda del desarrollo local y regional, con un marco regulatorio propicio a los desafíos y actualizaciones del siglo XXI. ",
      color1: "#103b00",
      color2: "#52c234",
      animation: "fade-right",
      anchor: "center-bottom",
      effect: "ease-in",
      duration: "1500",
    },
    {
      title: "Visión",
      icon: "negocio.png",
      text: "Consolidarnos como una organización referente en el desarrollo local y regional.",
      color1: "#2A2A72",
      color2: "#009FFD",
      animation: "fade-up",
      anchor: "center-bottom",
      effect: "ease-in",
      duration: "1500",
    },
    {
      title: "Próposito",
      icon: "grupo.png",
      text: "Recuperar el valor y la confianza en las instituciones públicas, curando la polarización existente, y trabajando por recuperar el sentido común de nuestros dirigentes; creando puentes de sinergia entre los actores públicos y privados en pos de un desarrollo sostenible.",
      color1: "#799F0C",
      color2: "#FFE000",
      animation: "fade-left",
      anchor: "center-bottom",
      effect: "ease-in",
      duration: "1500",
    },
  ]

  useEffect(()=>{
    aos.init()
  },[])

  return (
    <div className='mision' id="quienes-somos" style={{backgroundImage: "url('backgrounds/white-bg.webp')"}}>
      <h1>¿Quienes Somos?</h1>
      <p className='about-text'>Idear nace de la necesidad de potenciar ciudades y regiones como primeros actores de cambio de la realidad social. Trabajamos por co-crear una sinergia virtuosa entre actores públicos y privados, sumando fuerzas para atender a los desafíos tecnológicos de nuestro tiempo, junto a una visión de desarrollo basado en la sostenibilidad.</p>
      <div className='row row-cols-1 row-cols-sm-3 px-2 gx-5'>
        {
          items.map((item, i)=>
          <div className='col' 
          data-aos-duration={item.duration} 
          data-aos={item.animation} 
          data-aos-easing={item.effect} 
          data-aos-anchor-placement={item.anchor}>
            <div className='wrapper' key={i}>
              <div className='title' style={{background: `linear-gradient(white, white) padding-box, linear-gradient(to right, ${item.color1}, ${item.color2}) border-box`}}>
                <p>{item.title}</p>
              </div>
              <div className='text'>
                <p>{item.text}</p>
              </div>
              <div className='icon' style={{background: `linear-gradient(white, white) padding-box, linear-gradient(to right, ${item.color1}, ${item.color2}) border-box`}}>
                <img src={item.icon} alt="lorem ipsum" />
              </div>
            </div>
          </div>
          )
        }
      </div>
      <div className='wrapper big-card'
      data-aos-duration="1000" 
      data-aos="zoom-in" 
      data-aos-easing="ease-in" 
      data-aos-anchor-placement="center-bottom">
        <div className='title' style={{background: `linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(36, 31, 98), rgb(121, 45, 129)) border-box`}}>
          <p>Valores</p>
        </div>
        <div className='text row g-0'>
          <div 
          className='col-3' 
          style={{
            borderTopLeftRadius: "1em",
            borderBottomLeftRadius: "1em"
            }}
          >
            <div className='group'>
              <p>Democracia <br/> Delibertiva</p>
              <img src="icons/raise-hand.png" alt="lorem ipsum" />
              <p className='description'>Recuperar el control de la agenda pública a través de la participación ciudadana. Reafirmar la identidad cultural que hace al lugar dónde vivimos, comprometernos en la toma decisiones.</p>
            </div>
          </div>
          <div className='col-3'>
            <div className='group'>
              <p>Optimismo e Innovacion</p>
              <img src="icons/idea.png" alt="lorem ipsum" />
              <p className='description'>Mantener una mirada optimista, como un principio fundamental para pensar con creatividad las propuestas de un mejor futuro.</p>
            </div>
          </div>
          <div className='col-3'>
            <div className='group'>
              <p>Mirada <br/> Global</p>
              <img src="icons/worldwide.png" alt="lorem ipsum" />
              <p className='description'>Involucrar a los actores internacionales para lograr un desarrollo sostenible. Generar vínculos y nexos con los actores internacionales, principalmente los que hacen a la región Latam.</p>
            </div>
          </div>
          <div 
          className='col-3' 
          style={{
            borderTopRightRadius: "1em",
            borderBottomRightRadius: "1em",
            borderRight: "none"
          }}
          >
            <div className='group'>
              <p>Cooperación <br/> Publico-Privada</p>
              <img src="icons/cooperate.png" alt="lorem ipsum" />
              <p className='description'>Generar relaciones virtuosas en la relación entre empresas y estado, cuidando la transparencia y la defensa de la competencia. Trabajar en conjunto empresas y estado, nutriendo los lazos y vínculos entre ellos.</p>
            </div>
          </div>
          {/*
          <ul>
            <li>
              <b>Democracia deliberativa: </b>
              <p className='d-inline'>Recuperar el control de la agenda pública a través de la participación ciudadana. Reafirmar la identidad cultural que hace al lugar dónde vivimos, comprometernos en la toma decisiones.</p>
            </li>
            <li>
              <b>Optimismo e innovación: </b>
              <p className='d-inline'>Mantener una mirada optimista, como un principio fundamental para pensar con creatividad las propuestas de un mejor futuro.</p>
            </li>
            <li>
              <b>Mirada global: </b>
              <p className='d-inline'>Involucrar a los actores internacionales para lograr un desarrollo sostenible. Generar vínculos y nexos con los actores internacionales, principalmente los que hacen a la región Latam.</p>
            </li>
            <li>
              <b>Cooperación público-privada: </b>
              <p className='d-inline'>Generar relaciones virtuosas en la relación entre empresas y estado, cuidando la transparencia y la defensa de la competencia. Trabajar en conjunto empresas y estado, nutriendo los lazos y vínculos entre ellos.</p>
            </li>
          </ul>
          */}
        </div>
        <div className='icon' style={{background: `linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(36, 31, 98), rgb(121, 45, 129)) border-box`}}>
          <img src="grupo.png" alt="lorem ipsum" />
        </div>
      </div>
    </div>
  )
}
