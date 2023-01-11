import React from 'react'
import './inputBlok.scss';

export default function InputBlok(props) {
  return (
    <div>
        <input className='input_blok' type="text" placeholder={props.name_input}/>
    </div>
  )
}
