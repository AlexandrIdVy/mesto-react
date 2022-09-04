function ImagePopup() {
  return (
    <div className="popup popup_type_image-place">
      <figure className="popup__image-container">
        <button type="button" className="popup__close-btn button button_type_close-viewing"></button>
        <img className="popup__image" src="#" alt="#" />
        <figcaption className="popup__image-caption"></figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;
