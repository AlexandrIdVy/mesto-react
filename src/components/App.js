import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isOpen, setIsOpen] = React.useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [title, setTitle] = React.useState('');

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
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
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
