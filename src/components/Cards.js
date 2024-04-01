import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { Button } from './Button';

function Cards() {
  return (    
    <div className='cards'>      
        <h2>Most Visited Destinations</h2>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-item'>
                    <CardItem
                      path='/packages'
                      src='images/img-1.jpg'
                      heading='Bora Bora'
                      location='New Zealand'
                      label='Adventure'
                      price='$690'
                      details='Experience the vibrant culture and beautiful beaches of Rio de Janeiro, including Copacabana and Ipanema.'
                    />
                    <CardItem
                      path='/packages'
                      src='images/img-2.jpg'
                      heading='Bora Bora'
                      location='New Zealand'
                      label='Adventure'
                      price='$690'
                      details='Experience the vibrant culture and beautiful beaches of Rio de Janeiro, including Copacabana and Ipanema.'
                    />
                    <CardItem
                      path='/packages'
                      src='images/img-3.jpg'
                      heading='Bora Bora'
                      location='New Zealand'
                      label='Adventure'
                      price='$690'
                      details='Experience the vibrant culture and beautiful beaches of Rio de Janeiro, including Copacabana and Ipanema.'
                    />
                    </ul>
                    <ul className='cards-item'>
                    <CardItem
                      path='/packages'
                      src='images/img-4.jpg'
                      heading='Bora Bora'
                      location='New Zealand'
                      label='Adventure'
                      price='$690'
                      details='Discover the rich cultural heritage of Kyoto with its ancient temples, traditional tea houses, and stunning gardens.'
                    />
                    <CardItem
                      path='/packages'
                      src='images/img-5.jpg'
                      heading='Bora Bora'
                      location='New Zealand'
                      label='Adventure'
                      price='$690'
                      details='Discover the rich cultural heritage of Kyoto with its ancient temples, traditional tea houses, and stunning gardens.'
                    />
                    <CardItem
                      path='/packages'
                      src='images/img-6.jpg'
                      heading='Bora Bora'
                      location='New Zealand'
                      label='Adventure'
                      price='$690'
                      details='Discover the rich cultural heritage of Kyoto with its ancient temples, traditional tea houses, and stunning gardens.'
                    />
                </ul>
                <ul className='cards-item'>
                <CardItem
                      path='/packages'
                      src='images/img-7.jpg'
                      heading='Bora Bora'
                      location='New Zealand'
                      label='Adventure'
                      price='$690'
                      details='Discover the rich cultural heritage of Kyoto with its ancient temples, traditional tea houses, and stunning gardens.'
                    />
                    <CardItem
                      path='/packages'
                      src='images/img-8.jpg'
                      heading='Bora Bora'
                      location='New Zealand'
                      label='Adventure'
                      price='$690'
                      details='Discover the rich cultural heritage of Kyoto with its ancient temples, traditional tea houses, and stunning gardens.'
                    />
                    <CardItem
                      path='/packages'
                      src='images/img-9.jpg'
                      heading='Bora Bora'
                      location='New Zealand'
                      label='Adventure'
                      price='$690'
                      details='Discover the rich cultural heritage of Kyoto with its ancient temples, traditional tea houses, and stunning gardens.'
                    />
                </ul> 
            </div>
            <Button className='discover-more' 
            path='/packages'
            buttonStyle="btn--outline"
            buttonSize="btn--large">Discover More</Button>
        </div>
    </div>
  )
}

export default Cards
