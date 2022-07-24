import { Component } from "react";
import "./card.styles.css";
class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          src={
            "https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/" +
            this.props.champ.image.full
          }
          alt={this.props.champ.image.full}
        />
        <h2>{this.props.champ.name}</h2>
        <h5>{this.props.champ.title}</h5>
        <p>{this.props.champ.blurb}</p>
      </div>
    );
  }
}

export default Card;
