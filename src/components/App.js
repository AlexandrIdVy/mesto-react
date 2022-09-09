import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [cardLink, setCardLink] = useState('');
  const [cardName, setCardName] = useState('');
  const [user, setUser] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserMe(), api.getInitialCards()])
      .then(([dataUser, dataCards]) => {
        setUser(dataUser);
        setCards(dataCards);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoaded(true))
  }, [isLoaded]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    setIsOpen(true);
    setName('edit-avatar');
    setTitle('Обновить аватар');
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setIsOpen(true);
    setName('edit-profile');
    setTitle('Редактировать профиль');
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setIsOpen(true);
    setName('add-place');
    setTitle('Новое место');
  }

  function handleCardClick(card) {
    setSelectedCard(true);
    setCardLink(card.link);
    setCardName(card.name);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        avatar={user.avatar}
        name={user.name}
        description={user.about}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
      />
      <Footer />
      <PopupWithForm
        name={name}
        title={title}
        isOpen={isOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup
        name={cardName}
        link={cardLink}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
