function Card({onCardClick, name, link, likes, cardDeleteButtonAttribut, isLiked}) {

  const cardLikeButtonClassName = (
    `place__like-btn button ${isLiked ? 'place__like-btn_active' : ''}`
  );

  function handleClick() {
    const card = { link: link, name: name };
    onCardClick(card);
  }

  return (
    <article className="place">
      <button type="button" className="place__trash-btn button" disabled={cardDeleteButtonAttribut}></button>
      <img className="place__image" src={link} alt={name} onClick={handleClick} />
      <h2 className="place__title">{name}</h2>
      <div className="place__like">
        <button type="button" className={cardLikeButtonClassName}></button>
        <span className={ `place__like-value ${(likes.length > 0) ? "place__like-value_type_on" : "place__like-value"}`}>
          {likes.length}
        </span>
      </div>
    </article>
  );
}

export default Card;
