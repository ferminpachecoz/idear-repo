import React from 'react';
import './EquipoSection.scss';
import Slider from "react-slick";

export default function EquipoSection({equipo, title, subtitle}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 500,
    pauseOnHover: true
  };

  return (
    <div className='equipo-section'>
      <h1 className='section-title'>{title}</h1>
      <p className='section-subtitle'>{subtitle}</p>
      <Slider {...settings} style={{marginTop: "5em"}} >
        {
          equipo.map((item, i)=>
            <div className='carrousel-item'>
              <div className='image'>
                <img src={item.image} alt="lorem ipsum dolor" />
                <div className='shadow'>
                <ul className='social'>
                  <li>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                  </li>
                </ul>
                </div>
              </div>
              <p className='name'>{item.name}</p>
              <p className='trabajo'>{item.trabajo}</p>
            </div>
          )
        }
      </Slider>
    </div>
  )
}
