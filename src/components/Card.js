function Card({onCardClick, name, link, likes}) {

  function handleClick() {
    const card = { link: link, name: name };
    onCardClick(card);
  }

  return (
    <article className="place">
      <button type="button" className="place__trash-btn button"></button>
      <img className="place__image" src={link} alt={name} onClick={handleClick} />
      <h2 className="place__title">{name}</h2>
      <div className="place__like">
        <button type="button" className="place__like-btn button"></button>
        <span className={ `place__like-value ${(likes.length > 0) ? "place__like-value" : ""}`}>
          {likes.length}
        </span>
      </div>
    </article>
  );
}

export default Card;
