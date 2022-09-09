function ImagePopup(props) {
  return (
    <div className={ `popup popup_type_image-place ${props.card ? "popup_opened" : ""}`}>
      <figure className="popup__image-container">
        <button type="button" className="popup__close-btn button button_type_close-viewing" onClick={props.onClose}></button>
        <img className="popup__image" src={props.link} alt={props.name} />
        <figcaption className="popup__image-caption">{props.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
