import React from "react"

export default function (props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen ? 'popup_opened' : ''}`}>
      <article className="popup-figure">
        <button type="reset" onClick={props.onClose} className="popup__abort-button button"></button>
        <img className="popup-figure__image" src={props.card.link} />
        <h2 className="popup-figure__figurecaption">{props.card.name}</h2>
      </article>
    </div>
  )
}