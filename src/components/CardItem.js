import React from 'react';
import {Link} from 'react-router-dom';
import './Cards.css';
import { Button } from "./Button";

function CardItem(props) {
  return (
    <>
      
      <li className='cards-item'>
        <Link className='card-item-link' to={props.path}>            


            <figure className='card-item-pic-wrap'>                    

                <img src={props.src} alt='Travel Image' className='card-item-img'></img>

            </figure>


            <div className='card-text-container'>
            <div className='card-item-text'>
                <h5 className='card-item-heading' >{props.heading}</h5>
                <p className='card-item-location'>{props.location}</p>
            </div>

            <div className='card-item-prices'>
                <p className='card-item-label' >{props.label}</p>
                <p className='card-item-price'>{props.price}</p>
            </div>

            <div className='card-item-info'>
                <p className='card-item-details' >{props.details}</p>
                <Button
                  path='/packages'
                  className="details-button"
                  buttonStyle="btn--outline"
                  buttonSize="btn--medium">More Details
                </Button>
            </div>
            </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
