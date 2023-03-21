import React, {useState} from 'react';
import './Header.scss';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <div className='header-container row align-items-center'>
      <div className='col-6 col-sm-2 logo'>
        <a href="/"><h1>Idear.</h1></a>
      </div>
      <div className='menu-burger col-6'>
        <i className="bi bi-list" onClick={()=> setVisible(!visible)}></i>
      </div>
      {visible &&
        <div className='col-12 col-sm-6 responsive-content'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#quienes-somos">Quienes Somos</Link></li>
            <li><Link to="/objetivos">Objetivos</Link></li>
            <li><Link to="/#contacto">Contacto</Link></li>
            <li><Link to="/#dependencias">Dependencias</Link></li>
          </ul>
        </div>
      }
      <div className='col-12 col-sm-6 nav-content'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#quienes-somos">Quienes Somos</Link></li>
          <li><Link to="/objetivos">Objetivos</Link></li>
          <li><Link to="/#contacto">Contacto</Link></li>
          <li><Link to="/#dependencias">Dependencias</Link></li>
        </ul>
      </div>
      <div className='col-4 button-container'>
        <button><a href="/#contacto">Quiero Sumar</a></button>
      </div>
    </div>
  )
}
