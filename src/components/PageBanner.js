import React from 'react';
import './PageBanner.scss';

export default function PageBanner({title, url}) {
  return (
    <div className='page-banner' style={{backgroundImage: `url(${url})`}}>
      <div className='shadow'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
