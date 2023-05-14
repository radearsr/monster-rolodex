import "./cardItem.style.css";

const CardItem = ({ name, email, imageSrc }) => {
  return (
    <div className="card-item">
      <img src={imageSrc} alt={`monster ${name}`} />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

export default CardItem;
