import React from "react"

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

import { api } from '../utils/api'

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isOpenImage, setIsOpenImage] = React.useState(false)

  const [userInfo, setUserInfo] = React.useState({})
  const [cardList, setCardList] = React.useState([])
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsOpenImage(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsOpenImage(false)
  }

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([currentUser, cards]) => {
        setUserInfo(currentUser);
        setCardList(cards);
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        userName={userInfo.name}
        userDescription={userInfo.about}
        userAvatar={userInfo.avatar}
        cards={cardList}
        onCardClick={handleCardClick}
      />


      <Footer />

      <PopupWithForm
        title='Редактировать профиль'
        name='edit-profile'
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
      >
        <input type="text" id="name-input" name="name" className="popup__input-info popup__input-info_field_name" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="name-input-error popup__error"></span>

        <input type="text" id="about-input" name="about" className="popup__input-info popup__input-info_field_about" placeholder="Профессия" minLength="2" maxLength="200" required />
        <span className="about-input-error popup__error"></span>
      </PopupWithForm>


      <PopupWithForm
        title='Новое место'
        name='add-card'
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        buttonText='Создать'
      >
        <input type="text" id="title-input" name="title" placeholder="Название" className="popup__input-info popup__input-info_field_title" minLength="2" maxLength="30" required />
        <span className="title-input-error popup__error"></span>

        <input type="url" id="link-input" name="link" placeholder="Ссылка на картинку" className="popup__input-info popup__input-info_field_link" required />
        <span className="link-input-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        title='Обновить аватар'
        name='avatar-update'
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
      >
        <input type="url" id="avatar-input" name="avatar" placeholder="Ссылка на аватар" className="popup__input-info popup__input-info_field_avatar" required />
        <span className="avatar-input-error popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        title='Вы уверены?'
        name='card-delete'
        onClose={closeAllPopups}
        buttonText='Да'
      />

      <ImagePopup
        card={selectedCard}
        isOpen={isOpenImage}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
