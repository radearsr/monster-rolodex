import { Component } from 'react';
import CardItem from '../card-item/cardItem.component';
import "./cardList.style.css";

export default class CardList extends Component {
    render() {
      const { monsters } = this.props;
      return (
        <div className="card-lists">
            {monsters.map((monster) => (
                <CardItem 
                    imageSrc={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                    name={monster.name}
                    email={monster.email}
                    key={monster.id}
                />
            ))}
        </div>
      );
    }
}
