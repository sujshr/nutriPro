import "./App.css";
import FoodData from "./components/FoodData";
import SearchBar from "./components/SearchBar";
import Details from "./components/Details";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      result: [],
    };
    this.searchData = this.searchData.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState(
      () => {
        return {
          inputValue: e.target.value,
        };
      },
      () => {
        this.searchData();
      }
    );
  }

  searchData() {
    const { inputValue } = this.state;
    if (inputValue != "") {
      const filteredData = FoodData.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      this.setState({
        result: filteredData,
      });
    }
  }

  render() {
    return (
      <div id="app">
        <SearchBar handleinput={this.handleInput} />
        <div id="details">
          {this.state.result.map((item) => {
            return <Details key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
  }
}
