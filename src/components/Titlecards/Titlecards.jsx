import React, { useEffect, useRef } from 'react';
import './Titlecards.css';
import cards_data from '../../assets/cards/Cards_data';

const Titlecards = (title , category) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt="card" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Titlecards;    