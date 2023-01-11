import React from 'react'
import './work.scss';

export default function WorkLeft(props) {
  return (
    <div className='work-left'>
        <img src={props.imgProject}/>
        <div className='work-left__text'>
        <h3>{props.nameProject}</h3>
            <p>{props.aboutProject}</p>
            <a>Посмотреть проект<span className='icon-arrow-to-right'/></a>
        </div>
    </div>
  )
}
