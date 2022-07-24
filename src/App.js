import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = { champions: [], searchField: "" };
    console.log("constructor");
  }
  componentDidMount() {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json"
    )
      .then((data) => data.json())
      .then((data) => this.setState({ champions: Object.values(data.data) }));
  }

  onSearchChange(e) {
    const search = e.target.value.toUpperCase();
    this.setState({ searchField: search });
  }

  render() {
    console.log(this.state.champions);
    const filterChampions = this.state.champions.filter((champ) => {
      return champ.name.toUpperCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">League of Legends Champions</h1>
        <SearchBox
          placeholder="Search..."
          className="search-box"
          onChangeHandler={(e) => this.onSearchChange(e)}
        />
        <CardList champion={filterChampions} />
      </div>
    );
  }
}

export default App;
