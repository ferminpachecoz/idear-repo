import React from 'react';
import './SectionDependencias.scss';

export default function SectionDependencias({dependencias}) {
  return (
    <div className='section-dependencias'>
      {dependencias &&
        dependencias.map((item, i)=>
          <div className='row g-0' key={i}>
            <div className={`col-6 ${item.order1} content`} style={{backgroundImage: "url('backgrounds/white-bg.webp')"}}>
              <h2 className='title'>{item.title}</h2>
              <hr/>
              <p>{item.description}</p>
              <a href={item.url}>Saber Mas <i className="bi bi-arrow-up-right-circle"></i></a>
            </div>
            <div className={`col-6 image ${item.order2}`} style={{backgroundImage: `url(${item.image})`}}>
              <div className='shadow'>

              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
