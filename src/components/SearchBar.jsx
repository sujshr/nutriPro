import React, { Component } from 'react'
import './SearchBar.css'
export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" id="searchInput" placeholder='Search for something....' onChange={this.props.handleinput}/>
      </div>
    )
  }
}
