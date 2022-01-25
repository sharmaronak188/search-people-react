import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchField } from "./components/search-field/search-field.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      peoples: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((p) => this.setState({ peoples: p.data }));
  }

  render() {
    const { peoples, searchField } = this.state;
    const filteredPeople = peoples.filter((p) =>
      p.email.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="app-title">People Rolodex</h1>
        <SearchField
          placeholder="Search for people email..."
          handleChange={this.handleChange}
        />
        <CardList peoples={filteredPeople} />
      </div>
    );
  }
}

export default App;
