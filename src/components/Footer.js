import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-2 logo'>
          <h1><a href="/">Idear.</a></h1>
        </div>
        <div className='col-3 social-media'>
          <p>Innovacion en políticas públicas</p>
          <div className='d-flex icons'>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
        <div className='col-7 footer-nav'>
          <div>
            <p>Soporte</p>
            <a href="#">Contactanos</a>
          </div>
          <div>
            <p>Legal</p>
            <div className='d-flex flex-column'>
              <a href="#">Política de privacidad</a>
              <a href="#">Términos y condiciones</a>
            </div>
          </div>
          <div>
            <p>Municipios</p>
            <a href='http://ideartigre.com' target="_blank" className='button-idear'>
              <span className='logo-tigre' style={{backgroundImage: "url('../tigre-logo.png')"}}></span>
              <p>Idear Tigre</p>
            </a>
          </div>
        </div>
      </div>
      <hr/>
      <div className='legal-text'>
        <p className='copyright'>Copyright @ 2022 Idear</p>
        <p className='coder'>Created by <span className='fermin'>Fermin Pacheco</span></p>
      </div>
    </footer>
  )
}
