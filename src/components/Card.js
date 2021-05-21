import React from 'react'
import PropTypes from 'prop-types'

function Card({title, imageSrc, url, text}) {
  return (
    <div className="card text-center bg-dark ">
        <img src={imageSrc} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">
              {text? text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nobis ullam asperiores commodi quidem? Obcaecati reiciendis dolore aspernatur porro quas! Magni obcaecati nihil ex maxime voluptatum dolores debitis laudantium. Officiis."}
            </p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-outline-secondary rounded-0">Go to this website</a>
        </div>         
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url:PropTypes.string,
  imageSrc:PropTypes.string
}

export default Card;