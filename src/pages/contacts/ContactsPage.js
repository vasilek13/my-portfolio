import React from 'react'
import InputBlok from '../../components/input/inputBlok'
import './contacts.scss';

export default function ContactsPage() {
  return (
    <div className='contact_page'>
        <h1 className='heading_main'>У вас есть проект? Давайте сделаем это!</h1>
        <div className='contacts'>
            <div className='input_form'>
                <p className='heading_form'>Вы можете со мной связаться тут</p>
                <InputBlok name_input="имя"/>
                <InputBlok name_input="e-mail"/>
                <InputBlok name_input="сообщение"/>
                <input className='input_btn' type="button" value="отправить"/>
            </div>
            <div className='form_seti'>
                <p className='heading_form'>Либо тут</p>
                <div className='img_seti'>
                    <a href='#'><span className='icon-telegram'></span></a>
                    <a href='https://github.com/vasilek13'><span className='icon-github'></span></a>
                    <a href='https://vk.com/id327077598'><span className='icon-vk'></span></a>
                </div>
                <p className='seti_email'>vasilek_04@list.ru</p>
            </div>
        </div>
    </div>
  )
}
