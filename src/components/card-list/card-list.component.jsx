import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((element) => {
        return <Card monster={element} />;
      })}
    </div>
  );
};

export default CardList;

// Props is an *Object* that has all fo the different parameters/properties that are being passed into the component
// Props is by fdefault the first parameter passed in as a prop.
