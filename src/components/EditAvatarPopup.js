import React, {useEffect, useState, useContext, useRef} from "react";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);
  const avatarRef = useRef();

  const [value, setValue] = useState('');

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setValue(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <PopupWithForm
        name={'edit-avatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <PopupEditAvatar
          avatar={avatarRef}
          value={value}
          onChange={handleChange}
         />
      </PopupWithForm>
  );
}

export default EditAvatarPopup;
