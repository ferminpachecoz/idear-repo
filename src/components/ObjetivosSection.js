import React from 'react';
import './Objetivos.scss';
import aos from 'aos';
import { useEffect } from 'react';

export default function ObjetivosSection() {
  let items = [
    {
      icon: "../objetivos/comunidad.png",
      title: "Desarrollo local y regional",
      text: "Nuestra sociedad globalizada e interconectada puede llevarnos a perder nuestra dimensión local y regional, abandonando nuestro sentido de responsabilidad y pertenencia sobre nuestras comunidades y regiones. No puede pretenderse lograr grandes cambios si no se empieza por conocer, querer, y comprometerse por aquello más inmediato.",
      aDuration: "1000",
      animation: "fade-right",
      effect: "linear",
      anchor: "top-center"
    },
    {
      icon: "../objetivos/trabajo-en-equipo.png",
      title: "Participación ciudadana",
      text: "Contribuir al desarrollo de la cultura cívica y política-democrática. En nuestro tiempo  contamos con la enorme posibilidad de ejercer la participación ciudadana a través de las herramientas digitales. Tenemos quizás menos tiempo para movilizarnos y asisitir a reuniones, pero esto no puede quitar el valor fundamental que hace a nuestro pacto social y nuestra convivencia democrática, que es la participación de los ciudadanos en la cosa pública.",
      aDuration: "1000",
      animation: "fade-up",
      effect: "linear",
      anchor: "top-center"
    },
    {
      icon: "../objetivos/educacion.png",
      title: "Desarrollo educativo",
      text: "Sin educación no hay dignidad, ni libertad. El querer una sociedad educada es querer una sociedad digna y libre, no pretendemos menos. En línea con lo antedicho, nuestras comunidades se encuentran en grandes cambios, debemos velar por acompañar a las personas en estos procesos, para que no queden excluídas. Por otro lado, el desarrollo educativo también comprende un desarrollo íntegro, cultural. Que la persona pueda disfrutar contemplativamente la belleza que presentan artes y maravillas de nuestro mundo, contribuyendo al desarrollo de su felicidad.",
      aDuration: "1000",
      animation: "fade-left",
      effect: "linear",
      anchor: "top-center"
    },
    {
      icon: "../objetivos/multitud.png",
      title: "Inclusión social y financiera",
      text: "Si bien vivimos en un mundo en constante desarrollo, la brecha entre ricos y pobres se va acrecentando. El capital cada vez está más concentrado, con grandes empresas que invierten en tecnologías que sustituyen la actividad humana y sólo precisan de ejecutivos altamente calificados. El futuro de muchas generaciones se vé comprometido, por eso debemos trabajar desde ahora en encontrarles un lugar, acompañarlos, y darles valor para que puedan desarrollarse con libertad. ",
      aDuration: "1000",
      animation: "fade-right",
      effect: "linear",
      anchor: "top-center"
    },
    {
      icon: "../objetivos/chip.png",
      title: "Tecnología",
      text: "Es imprescindible la actualización constante de herramientas y conocimiento con los que cuenta nuestro tiempo. La tecnología comprendida en un sentido positivo agiliza y mejora la calidad de las personas, es un medio eficaz e incorruptible para llevar a cabo la visión de futuro que queremos.",
      aDuration: "1000",
      animation: "fade-up",
      effect: "linear",
      anchor: "top-center"
    },
    {
      icon: "../objetivos/el-planeta-tierra.png",
      title: "Desarrollo económico sostenible",
      text: "Contribuir al fomento de la cultura empresarial y laboral-productiva, con especial consideración de la responsabilidad social corporativa, y el compromiso por la sostenibilidad. Cuidando de nuestros recursos naturales, e incentivando el uso de energías renovables. Siempre con una visión capitalista, en defensa de la propiedad privada y las libertades económicas.",
      aDuration: "1000",
      animation: "fade-left",
      effect: "linear",
      anchor: "top-center"
    },
    {
      icon: "../objetivos/transparencia.png",
      title: "Transparencia",
      text: "Todo acto (ya sea por acción u omisión) de corrupción queda expresamente rechazado en nuestra asociación. Es vital para el desarrollo de nuestra convivencia y el de nuestras comunidades el obrar en forma transparente, rechazando y denunciando todo acto de corrupción que tenga algún tipo de vinculación con la asociación.",
      aDuration: "1000",
      animation: "fade-right",
      effect: "linear",
      anchor: "top-center"
    },
    {
      icon: "../objetivos/bandera.png",
      title: "Soberanía nacional e identidad cultural",
      text: "En nuestro mundo globalizado, peligra la riqueza que presenta la diversidad de las identidades culturales. Una sociedad desarrollada con justicia es una sociedad que crece en la diversidad. La uniformidad lleva a la corrupción y el autoritarismo.",
      aDuration: "1000",
      animation: "fade-up",
      effect: "linear",
      anchor: "top-center"
    },
    {
      icon: "../objetivos/acuerdo.png",
      title: "Relaciones internacionales",
      text: "La sociabilidad internacional robustece y reafirma el valor de la soberanía e identidades culturales. Nos ayuda a comprendernos mejor, ”vernos y que nos vean desde afuera”. Las comunidades cerradas son las que no salen de sus vicios. El falso miedo a imperialismos o países dominantes no hace más que demostrar la debilidad interna, que no cree en la seguridad de saber defender sus intereses, estableciendo relaciones dialécticas de “o dominantes, o dominados” sin ponderar un criterio de relación cooperativo, sano, virtuoso.",
      aDuration: "1000",
      animation: "fade-left",
      effect: "linear",
      anchor: "top-center"
    },
  ]

  useEffect(()=>{
    aos.init()
  },[])

  return (
    <div className='objetivos'>
      <div className='row row-cols-3 g-5 mt-5'>
        {
          items.map((item, i)=>
          <div data-aos-duration={item.aDuration} data-aos={item.animation} data-aos-easing={item.effect} data-aos-anchor-placement={item.anchor} >
            <div className='wrapper col' key={i}>
              <img className='icon' src={item.icon} alt={item.title} />
              <p className='title'>{item.title}</p>
              <p className='text'>{item.text}</p>
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}
