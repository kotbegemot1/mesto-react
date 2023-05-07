import React from "react"
import Basket from '../images/basket.svg'

export default function ({card, onCardClick}) {

  function handleClick() {
    onCardClick(card)
  }

  return (
    <article className="element">
      <img className="element__image" src={card.link} onClick={handleClick} />
      <button type="button" className="element__delete button"><img alt="корзина" src ={Basket} /></button>
      <div className="element__desc">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like button"></button>
          <p className="element__like-counter"></p>
        </div>
      </div>
    </article>
  )
}