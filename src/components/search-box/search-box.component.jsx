import { Component } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className={this.props.className}
          placeholder={this.props.placeholder}
          onChange={(e) => this.props.onChangeHandler(e)}
        />
        <ion-icon name="search-outline"></ion-icon>
      </div>
    );
  }
}

export default SearchBox;
