import React from 'react'
import imagen1 from "../assets/imagen1.jpg"

function Card(title) {
  return (
    <div className="card text-center bg-dark ">
        <img src={imagen1} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">My title</h4>
            <p className="card-text text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nobis ullam asperiores commodi quidem? Obcaecati reiciendis dolore aspernatur porro quas! Magni obcaecati nihil ex maxime voluptatum dolores debitis laudantium. Officiis.</p>
            <a href="#" className="btn btn-outline-secondary rounded-0">Go to this website</a>
        </div>         
    </div>
  );
}

export default Card;