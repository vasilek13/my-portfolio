import React from 'react'
import './mainCard.scss';
import Typewriter from 'typewriter-effect';

export default function MainCard() {
  return (
    <div className='main_card'>
        <div className='main_card__top'>
            <div className='top_circles'>
                <div className='main_circle'></div>
                <div className='main_circle'></div>
                <div className='main_circle'></div>
            </div>
            <div className='top_name'>vasilek.com</div>
        </div>
        <div className='code_print'>
          {/*<div className='print first anim-typewriter'>
              <p className='print_line first'>.SobreMi </p>
              <p className='print_line'><span>Profesion:</span> Developer;</p>
              <p className='print_line'><span>Lenguajes:</span> JS, CSS;</p>
          </div>
          <div className='print anim-typewriter'>
              <p className='print_line first'>.Educacion</p>
              <p className='print_line'><span>FreeCodeCamp:</span>JS Courses;</p>
              <p className='print_line'><span>Udemy:</span> CSS Courses;</p>
  </div>*/}
          <Typewriter
            onInit={(typewriter)=> {typewriter
              .pauseFor(200)
              .changeDelay(70)
              .typeString('<span style="color: #FF5F56">.SobreMi</span> {<br/>')
              .pauseFor(300)
              .pasteString("<br/>")
              .typeString('<span style="color: #948715; margin-left: 20px">Profesion:</span> Developer;<br/>')
              .pauseFor(300)
              .typeString('<span style="color: #948715; margin-left: 20px"">Lenguajes:</span> JS, CSS;<br/>')
              .pasteString("<br/> }")
              .pauseFor(400)
              .pasteString("<br/>")
              .typeString('<br/><span style="color: #FF5F56">.Educacion</span> {<br/>')
              .pauseFor(300)
              .pasteString("<br/>")
              .typeString('<span style="color: #948715; margin-left: 20px">FreeCodeCamp:</span> JS Courses;<br/>')
              .pauseFor(300)
              .typeString('<span style="color: #948715; margin-left: 20px"">Udemy:</span> CSS Courses;<br/>')
              .pasteString("<br/> }")
              .start();
            }}
          />
        </div>
    </div>
  )
}
