import { useEffect, useState } from 'react';
import CardList from './components/card-list/cardList.component';
import SearchBox from './components/search-box/searchBox.component';
import "./App.css";


const App = () => {
  const [searchFields, setSearchFields] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchFields(searchFieldString);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFields);
    });
    setFilteredMonsters(newFilteredMonster);
  }, [monsters, searchFields]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        textHolder="search monster"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//       this.setState(() => {
//         return { monsters: users }
//       })
//     });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={this.onSearchChange}
//           textHolder="search monster"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }
