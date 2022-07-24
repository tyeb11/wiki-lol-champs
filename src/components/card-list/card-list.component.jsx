import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
class CardList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card-list">
        {this.props.champion.map((champ, index) => {
          return <Card champ={champ} key={index} />;
        })}
      </div>
    );
  }
}

export default CardList;
