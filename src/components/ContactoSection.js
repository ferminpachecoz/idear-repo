import React from 'react';
import './Contacto.scss';

export default function Contacto() {
  return (
    <div className='contacto row g-0' id="contacto">
      <div className='col-12 col-sm-4 icon' style={{backgroundImage: "url('innovation.png')"}}>

      </div>
      <div className='col-12 col-sm-8 wrapper'>
        <form>
          <div className='row mb-4'>
            <input type="text" className='col-12 col-md' placeholder='Nombre *' />
            <input type="text" className='col-12 col-md' placeholder='Apellido *' />
          </div>
          <div className='row mb-4'>
            <input type="text" className='col-12 col-sm' placeholder='Correo Electrónico *' />
            <input type="text" className='col-12 col-sm' placeholder='Celular *' />
          </div>
          <div className='mb-4'>
            <textarea cols="30" rows="10" placeholder='Mensaje *'></textarea>
          </div>
          <div>
            <button>Enviar Mensaje</button>
          </div>
        </form>
      </div>
    </div>
  )
}
