import { Component } from 'react';
import "./cardItem.style.css";

export default class CardItem extends Component {
  render() {
    const { name, email, imageSrc } = this.props;
    return (
      <div className="card-item">
        <img src={imageSrc} alt={`monster ${name}`} />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    )
  }
}
