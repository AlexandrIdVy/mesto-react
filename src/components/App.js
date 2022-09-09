import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddPlace from "./PopupAddPlace";
import PopupConfirm from "./PopupConfirm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [buttonText, setButtonText] = useState('');

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    setName('edit-avatar');
    setTitle('Обновить аватар');
    setButtonText('Сохранить');
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setName('edit-profile');
    setTitle('Редактировать профиль');
    setButtonText('Сохранить');
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setName('add-place');
    setTitle('Новое место');
    setButtonText('Создать');
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

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name={name}
        title={title}
        buttonText={buttonText}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <PopupAddPlace />
      </PopupWithForm>

      <PopupWithForm
        name={name}
        title={title}
        buttonText={buttonText}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <PopupEditAvatar />
      </PopupWithForm>

      <PopupWithForm
        name={name}
        title={title}
        buttonText={buttonText}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
       <PopupEditProfile/>
      </PopupWithForm>

      <PopupWithForm
        name={name}
        title={title}
        buttonText={buttonText}
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
      >
        <PopupConfirm />
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
