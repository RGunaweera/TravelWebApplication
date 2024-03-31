import React from 'react';
import {Link} from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      
      <li className='cards-item'>
        <Link className='card-item-link' to={props.path}>
            <figure className='card-item-pic-wrap' data-catagory={props.label}>
                <img src={props.src} alt='Travel' className='card-item-img'></img>
            </figure>
            <div className='card-item-info'>
                <h5 className='card-item-text' >{props.text}</h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
