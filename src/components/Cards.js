function Cards(props) {
  return (
    <article className="place">
      <button type="button" className="place__trash-btn button"></button>
      <img className="place__image" src={props.link} alt={props.name} />
      <h2 className="place__title">{props.name}</h2>
      <div className="place__like">
        <button type="button" className="place__like-btn button"></button>
        <span className="place__like-value">{props.likes}</span>
      </div>
    </article>
  )
}

export default Cards;
