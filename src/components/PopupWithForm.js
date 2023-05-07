import React from "react"

export default function(props) {
  // console.log(props.isOpen);
  return (
    <>
      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className={`popup__container popup__container_type_${props.name}`}>
          <button type="reset" onClick={props.onClose} className="popup__abort-button button"></button>
          <h3 className="popup__title">{props.title}</h3>
          <form action="/" name={props.name} className={`popup__form popup__form_type_${props.name}`} noValidate>

            {props.children}

            <button type="submit" className="popup__save-button button">Сохранить</button>
          </form>
        </div>
      </div>

      {/* <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button type="reset" className="popup__abort-button button"></button>
          <h3 className="popup__title">Новое место</h3>
          <form action="/" name="card-form" className="popup__form popup__form_type_add-card">

            <input type="text" id="title-input" name="title" placeholder="Название" className="popup__input-info popup__input-info_field_title" minLength="2" maxLength="30" required />
            <span className="title-input-error popup__error"></span>

            <input type="url" id="link-input" name="link" placeholder="Ссылка на картинку" className="popup__input-info popup__input-info_field_link" required />
            <span className="link-input-error popup__error"></span>

            <button type="submit" className="popup__save-button button">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar-update">
        <div className="popup__container popup__container_type_avatar-update">
          <button type="reset" className="popup__abort-button button"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form action="/" name="avatar-update" className="popup__form popup__form_type_avatar-update">

            <input type="url" id="avatar-input" name="avatar" placeholder="Ссылка на аватар" className="popup__input-info popup__input-info_field_avatar" required />
            <span className="avatar-input-error popup__error"></span>

            <button type="submit" className="popup__save-button button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_card-delete">
        <div className="popup__container popup__container_type_delete">
          <button type="reset" className="popup__abort-button button"></button>
          <h3 className="popup__title popup__title_type_delete">Вы уверены?</h3>
          <button type="submit" className="popup__save-button button">Да</button>
        </div>
      </div> */}
    </>
  )
}