import React from 'react';
import './EquipoSection.scss';
import Slider from "react-slick";

export default function EquipoSection() {
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
      <h1 className='section-title'>Nuestro Equipo</h1>
      <p className='section-subtitle'>lorem ipsum dolor sit amet</p>
      <Slider {...settings} style={{marginTop: "5em"}} >
        <div className='carrousel-item'>
          <img src="icons/blank-profile.png" alt="lorem ipsum dolor" />
          <a href='#'>Carlos Fernandez</a>
        </div>
        <div className='carrousel-item'>
          <img src="icons/blank-profile.png" alt="lorem ipsum dolor" />
          <a href='#'>Carlos Fernandez</a>
        </div>
        <div className='carrousel-item'>
          <img src="icons/blank-profile.png" alt="lorem ipsum dolor" />
          <a href='#'>Carlos Fernandez</a>
        </div>
        <div className='carrousel-item'>
          <img src="icons/blank-profile.png" alt="lorem ipsum dolor" />
          <a href='#'>Carlos Fernandez</a>
        </div>
      </Slider>
    </div>
  )
}
