function PopupEditAvatar({avatar, value, onChange}) {
  return (
    <>
    <label className="popup__fieldset">
      <input type="url"
      className="popup__form-input popup__form-input_type_avatar-on"
      id="place-avatar"
      name="avatar"
      placeholder="Ссылка на картинку"
      required
      value={value}
      ref={avatar}
      onChange={onChange}
      />
      <span className="popup__form-input-error place-avatar-error"></span>
    </label>
    </>
  );
}

export default PopupEditAvatar;
