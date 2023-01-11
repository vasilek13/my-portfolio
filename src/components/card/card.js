import React from 'react';
import './card.scss';

const Card = (props) => {
    return(
        <div className='card_skills'>
            <div className='card_skills__top'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <div className='card_skills__main_in'>
                <h3>{props.card_name}</h3>
                <img src={props.card_logo}/>
            </div>
        </div>
    )
}

export default Card;