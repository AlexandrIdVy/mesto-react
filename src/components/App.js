import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

function App() {
  const [isOpen, setIsOpen] = useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [isUserData, setIsUserData] = useState(false);

  useEffect(() => {
    if (!isUserData){
      api.getUserMe()
      .then(data => setUser(data))
      .catch(err => console.log(err))
      .finally(() => setIsUserData(true));
    }
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    setName('edit-avatar');
    setTitle('Обновить аватар');
    setIsOpen('popup_opened');
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setName('edit-profile');
    setTitle('Редактировать профиль');
    setIsOpen('popup_opened');
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setName('add-place');
    setTitle('Новое место');
    setIsOpen('popup_opened');
  }

  function closeAllPopups() {
    setIsOpen('');
    setName('');
    setTitle('');
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        userAvatar={user.avatar}
        userName={user.name}
        userDescription={user.about}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
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
      <ImagePopup />
      <template id="place-template">
        <article className="place">
          <button type="button" className="place__trash-btn button"></button>
          <img className="place__image" src="#" alt="#" />
          <h2 className="place__title"></h2>
          <div className="place__like">
            <button type="button" className="place__like-btn button"></button>
            <span className="place__like-value"></span>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
