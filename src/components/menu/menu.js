import React from 'react'
import './menu.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='menu'>
        <nav>
            <ul className='menu__menu'>
                <li><Link to="/hard-skills" className='menu_link'>Hard skills</Link></li>
                <li><Link to="/my-works" className='menu_link'>Мои работы</Link></li>
                <li><Link to="/contacts" className='menu_link'>Контакты</Link></li>
            </ul>
        </nav>
        <nav>
            <ul className='menu__seti'>
                <li><a><span className='icon-telegram'></span></a></li>
                <li><a href='https://github.com/vasilek13'><span className='icon-github'></span></a></li>
                <li><a href='https://vk.com/id327077598'><span className='icon-vk'></span></a></li>
            </ul>
        </nav>
    </div>
  )
}
