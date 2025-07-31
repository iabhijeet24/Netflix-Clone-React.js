import React from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'

const Titlecards = () => {
  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
      <div className="cards-list">
        {cards_data.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt='card'></img>
            <p>{card.name}</p>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default Titlecards
