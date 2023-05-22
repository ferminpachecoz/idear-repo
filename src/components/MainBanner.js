import React from 'react';
import './MainBanner.scss';

export default function MainBanner() {
  return (
    <div className='main-banner'>
        <div className='image' style={{backgroundImage:"url('backgrounds/3452835.jpg')"}}>
          <div className='shadow'>
            <div className='content'>
              <h1>IDEAR.</h1>
              <p>Innovación en políticas públicas</p>
            </div>
          </div>
        </div>
    </div>
  )
}
