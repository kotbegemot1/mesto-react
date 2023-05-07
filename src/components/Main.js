import React from "react"

import Card from './Card'
 
export default function (props) {

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__avatar-container">
        <img alt="Аватар профайла" src={props.userAvatar} onClick={props.onEditAvatar} className="profile__avatar" />
      </div>
      <div className="profile__info">
        <h1 className="profile__name">{props.userName}</h1>
        <button type="button" onClick={props.onEditProfile} className="profile__edit button"></button>
        <p className="profile__about">{props.userDescription}</p>
      </div>
      <button type="button" onClick={props.onAddPlace} className="profile__add-new button"></button>
    </section>

    <section className="elements">
      {props.cards.map((card) => (
      <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
  </main>
    )
}
