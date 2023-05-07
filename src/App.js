import React, { Component } from 'react';
import CardList from './components/card-list/cardList.component';
import SearchBox from './components/search-box/searchBox.component';
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      this.setState(() => {
        return { monsters: users }
      })
    });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox
          className="search-box"
          onChangeHandler={this.onSearchChange}
          textHolder="search monster"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
