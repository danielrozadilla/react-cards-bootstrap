import React from 'react'


function Card({title, imageSrc, url}) {
  return (
    <div className="card text-center bg-dark ">
        <img src={imageSrc} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nobis ullam asperiores commodi quidem? Obcaecati reiciendis dolore aspernatur porro quas! Magni obcaecati nihil ex maxime voluptatum dolores debitis laudantium. Officiis.</p>
            <a href={url} target="_blank" className="btn btn-outline-secondary rounded-0">Go to this website</a>
        </div>         
    </div>
  );
}

export default Card;