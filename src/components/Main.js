import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [user, setUser] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserMe(), api.getInitialCards()])
      .then(([dataUser, dataCards]) => {
        setUser(dataUser);
        setCards(dataCards);
      })
      .catch(err => console.log(err))
  }, []);

    return (
      <main className="content">
      <section className="profile">
        <button type="button" className="profile__edit-avatar-btn button" onClick={onEditAvatar}>
          <img src={user.avatar} alt={user.name} className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__info-title">{user.name}</h1>
          <p className="profile__info-subtitle">{user.about}</p>
          <button type="button" className="profile__info-edit-btn button" onClick={onEditProfile}></button>
        </div>
        <button type="button" className="profile__add-btn button" onClick={onAddPlace}></button>
      </section>
      <section className="places">
         { cards ? cards.map(card =>
          (<Card
            key={card._id} {...card}
            onCardClick={onCardClick}
          />)) : null }
      </section>
      </main>
    );
}

export default Main;
