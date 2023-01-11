import React from 'react'
import MainCard from '../../components/mainCard/mainCard';
import './main.scss';

export default function MainPage() {
  return (
    <div className='main_page'>
        <div className='main_page__about-me'>
            <p className='hello'>¡Привет!</p>
            <p className='my_name'>Я Юля, </p>
            <p className='my_prof'>fro<span>nt</span>end <span>ра</span>зра<span>б</span>отч<span>ик.</span></p>
        </div>
        <div><MainCard/></div>
    </div>
  )
}
