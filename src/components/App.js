import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import Cards from "./Cards";

function App() {
  const [isOpen, setIsOpen] = useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserMe()
      .then(dataUser => setUser(dataUser))
      .catch(err => console.log(err))
      .finally(() => setIsLoaded(true))
  }, [isLoaded]);

  useEffect(() => {
    api.getInitialCards()
      .then(dataCards => setCards(dataCards))
      .catch(err => console.log(err))
      .finally(() => setIsLoaded(true))
  }, []);

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
      <main className="content">
      <Main
        userAvatar={user.avatar}
        userName={user.name}
        userDescription={user.about}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <section className="places">
        { cards.map(card => <Cards key={card._id} {...card} />) }
      </section>
      </main>
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
    </div>
  );
}

export default App;
