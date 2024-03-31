import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (    
    <div className='cards'>      
        <h2>Most Visited Destinations</h2>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-item'>
                    <CardItem
                      src='images/beach.jpg'
                      text='Expolore the advenvknvudnck oibkoskn soivhv kisfhoei'
                      label='Adventure'
                      path='/services'
                    />
                    <CardItem
                      src='images/beach.jpg'
                      text='Expolore the advenvknvudnck oibkoskn soivhv kisfhoei'
                      label='Adventure'
                      path='/services'
                    />
                    <CardItem
                      src='images/beach.jpg'
                      text='Expolore the advenvknvudnck oibkoskn soivhv kisfhoei'
                      label='Adventure'
                      path='/services'
                    />
                    </ul>
                    <ul className='cards-item'>
                    <CardItem
                      src='images/beach.jpg'
                      text='Expolore the advenvknvudnck oibkoskn soivhv kisfhoei'
                      label='Adventure'
                      path='/services'
                    />
                    <CardItem
                      src='images/beach.jpg'
                      text='Expolore the advenvknvudnck oibkoskn soivhv kisfhoei'
                      label='Adventure'
                      path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
