function PopupWithForm({isOpen, name, title, children, buttonText, onClose}) {
  return (
    <div className={`popup popup_type_${isOpen ? name : ""} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className={`popup__title popup__title_type_${isOpen ? name : ""}`}>
          {isOpen ? title : ""}
        </h2>
        <form name={name} className={`popup__form popup__form_type_${isOpen ? name : ""}`}>
            {children}
          <button type="submit" className="popup__form-confirm-btn button">{buttonText}</button>
        </form>
        <button type="button" className="popup__close-btn button button_type_close" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
