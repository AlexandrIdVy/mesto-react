function Main(props) {
    return (
      <section className="profile">
        <button type="button" className="profile__edit-avatar-btn button" onClick={props.onEditAvatar}>
          <img src={props.userAvatar} alt="Аватар профиля" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__info-title">{props.userName}</h1>
          <p className="profile__info-subtitle">{props.userDescription}</p>
          <button type="button" className="profile__info-edit-btn button" onClick={props.onEditProfile}></button>
        </div>
        <button type="button" className="profile__add-btn button" onClick={props.onAddPlace}></button>
      </section>
    )
}

export default Main;
