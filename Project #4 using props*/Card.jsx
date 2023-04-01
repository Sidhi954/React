function Card(props){
  return(
    <div className="cards">
    <div className="card">
      <img src={props.imgsrc} alt="" className="card__img"/>
      <div className="card__info">
        <span className="card__category">{props.title}</span>
        <h3 className="card__title">{props.head}</h3>
        <h4 className="info">{props.price}</h4>
      </div>
    </div>
    </div>
  );
}

export default Card;