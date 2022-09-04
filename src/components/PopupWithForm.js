import PopupEditAvatar from "./PopupEditAvatar";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddPlace from "./PopupAddPlace";
import PopupConfirm from "./PopupConfirm";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <div className="popup__container">
        <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
        <form name={props.name} className={`popup__form popup__form_type_${props.name}`} noValidate>
          {props.isEditAvatarPopupOpen && <PopupEditAvatar />}
          {props.isEditProfilePopupOpen && <PopupEditProfile />}
          {props.isAddPlacePopupOpen && <PopupAddPlace />}
          {props.isConfirmPopupOpen && <PopupConfirm />}
        </form>
        <button type="button" className="popup__close-btn button button_type_close" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;
