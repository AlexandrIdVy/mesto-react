import Card from "./Card";

function Main(props) {
    return (
      <main className="content">
      <section className="profile">
        <button type="button" className="profile__edit-avatar-btn button" onClick={props.onEditAvatar}>
          <img src={props.avatar} alt="Аватар профиля" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__info-title">{props.name}</h1>
          <p className="profile__info-subtitle">{props.description}</p>
          <button type="button" className="profile__info-edit-btn button" onClick={props.onEditProfile}></button>
        </div>
        <button type="button" className="profile__add-btn button" onClick={props.onAddPlace}></button>
      </section>
      <section className="places">
         { props.cards ? props.cards.map(card =>
          <Card
            key={card._id} {...card}
            onCardClick={props.onCardClick}
          />) : null }
      </section>
      </main>
    );
}

export default Main;
