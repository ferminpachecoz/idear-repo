import React, {useState} from 'react';
import './Header.scss';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <div className='header-container row align-items-center'>
      <div className='menu-burger col-6'>
        <i className="bi bi-list" onClick={()=> setVisible(!visible)}></i>
      </div>
      {visible &&
        <div className='col-12 col-sm-8 responsive-content'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#">Newsletter</Link></li>
            <li><Link to="/#dependencias">Dependencias</Link></li>
            <li><Link to="/objetivos">Perspectivas</Link></li>
            <li><Link to="/#contacto">Contacto</Link></li>
          </ul>
        </div>
      }
      <div className='col-12 col-sm-8 nav-content'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#">Newsletter</Link></li>
          <li><Link to="/#dependencias">Dependencias</Link></li>
          <li><Link to="/objetivos">Perspectivas</Link></li>
          <li><Link to="/#contacto">Contacto</Link></li>
        </ul>
      </div>
      <div className='col-4 button-container'>
        <button><Link to="/#contacto">Quiero Sumar</Link></button>
      </div>
    </div>
  )
}
