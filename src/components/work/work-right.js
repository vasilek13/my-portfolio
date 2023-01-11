import React from 'react';
import './work.scss';

export default function WorkRight(props) {
  return (
    <div className='work-left'>
        <div className='work-left__text right'>
            <h3>{props.nameProject}</h3>
            <p>{props.aboutProject}</p>
            <a><span className='icon-arrow-to-left'/>Посмотреть проект</a>
        </div>
        <img src={props.imgProject}/>
    </div>
  )
}
