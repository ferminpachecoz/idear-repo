import React from 'react';
import './IdearTigre.scss';

export default function IdearTigre() {
  return (
    <div className='idear-tigre' id='dependencias'>
      <div className='shadow row g-0'>
        <div className='col-12 col-sm-9 title'>
          <p
          data-aos-duration="1500" 
          data-aos="zoom-in-right" 
          data-aos-easing="ease-in" 
          data-aos-anchor-placement="center-bottom">
            Idear está en el municipio de Tigre
          </p>
        </div>
        <div className='col-12 col-sm-3 d-flex justify-content-center align-items-center'>
          <a 
          href='http://ideartigre.com' 
          target="_blank"
          data-aos-duration="1500" 
          data-aos="zoom-in-left" 
          data-aos-easing="ease-in" 
          data-aos-anchor-placement="center-bottom">
            <span className='image'></span>
            <p>Idear Tigre</p>
          </a>
        </div>
      </div>
    </div>
  )
}
