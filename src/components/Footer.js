import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-12 col-sm-9 logo'>
          <h1><a href="/">Idear.</a></h1>
        </div>
        <div className='col-12 col-sm-3 social-media'>
          <p>Innovacion en políticas públicas</p>
          <div className='d-flex icons'>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter"></i>
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
