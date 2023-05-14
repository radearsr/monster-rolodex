import CardItem from '../card-item/cardItem.component';
import "./cardList.style.css";

const CardList = ({monsters}) => {
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
};


export default CardList;
