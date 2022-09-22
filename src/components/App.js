import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from '../contexts/CardsContext';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupAddPlace from "./PopupAddPlace";
import PopupConfirm from "./PopupConfirm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  const [currentUser, setСurrentUser] = useState({name: '', about: ''});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserMe(), api.getInitialCards()])
      .then(([dataUser, dataCards]) => {
        setСurrentUser(dataUser);
        setCards(dataCards);
      })
      .catch(err => console.log(err))
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({name: card.name, link: card.link});
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (isLiked) {
      api.removeLike(card._id)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err));
    }
    else {
      api.addLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err => console.log(err));
    }

  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((cards) => {
        setCards((state) => state.filter((c) => c._id === card._id ? c = 0 : cards));
      })
      .catch(err => console.log(err));
  }

  function handleUpdateUser(dataUser) {
    api.sendDataUserMe(dataUser)
      .then(data => setСurrentUser(data))
      .catch(err => console.log(err));

    closeAllPopups();
  }

  return (
    <div className="page">
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <CardsContext.Provider value={cards}>
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
      <Footer />
      <PopupWithForm
        name={'add-place'}
        title={'Новое место'}
        buttonText={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <PopupAddPlace />
      </PopupWithForm>

      <PopupWithForm
        name={'edit-avatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <PopupEditAvatar />
      </PopupWithForm>

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

      <PopupWithForm
        name={'confirm'}
        title={'Вы уверены?'}
        buttonText={'Да'}
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
      >
        <PopupConfirm />
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      </CardsContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
