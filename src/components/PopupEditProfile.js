function PopupEditProfile() {
  return (
    <>
    <label className="popup__fieldset">
      <input type="text"
      className="popup__form-input popup__form-input_type_name-on"
      id="profile-name"
      placeholder="Ваше имя?"
      name="name"
      required
      minLength="2"
      maxLength="40" />
      <span className="popup__form-input-error profile-name-error"></span>
    </label>
    <label className="popup__fieldset">
      <input type="text"
      className="popup__form-input popup__form-input_type_description-on"
      id="profile-description"
      placeholder="Чем Вы занимаетесь?"
      name="about"
      required
      minLength="2"
      maxLength="200" />
      <span className="popup__form-input-error profile-description-error"></span>
    </label>
    <button type="submit" className="popup__form-confirm-btn button" disabled>Сохранить</button>
    </>
  );
}

export default PopupEditProfile;
