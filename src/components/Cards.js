import React from 'react'
import Card from './Card'

import imagen1 from "../assets/imagen1.jpg"
import imagen2 from "../assets/imagen2.jpg"
import imagen3 from "../assets/imagen3.jpg"

const cards=[
    {
        id:1,
        title:'Lechuza',
        image:imagen1,
        url:'https://facebook.com'
    },
    {
        id:2,
        title:'Libelula',
        image:imagen2,
        url:'https://youtube.com'
    },
    {
        id:3,
        title:'Mariposa',
        image:imagen3,
        url:'https://google.com'
    }
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
        <div className="row">
            {cards.map(card =>
                <div className="col-md-4">
                    <Card title={card.title} imageSrc={card.image} url={card.url}/>
                </div> 
            )}
                      
        </div>        
    </div>
  )
}

export default Cards;