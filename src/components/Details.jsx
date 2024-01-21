import React, { Component } from "react";
import "./Details.css";
export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.changeCount = this.changeCount.bind(this);
    this.reset = this.reset.bind(this);
  }

  increase() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  changeCount(e) {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue > -1) {
      this.setState({
        count: inputValue,
      });
    }
  }

  reset(){
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <div className="detail">
        <div className="general">
          <img src={this.props.item.img} alt="" />
          <div className="foodName">
            <p>{this.props.item.name}</p>
            <p>{this.props.item.cal}</p>
          </div>
          <div className="increment">
            <input
              type="number"
              value={this.state.count}
              onChange={this.changeCount}
            />
            <button className="addButton" onClick={this.increase}>
              +
            </button>
          </div>
        </div>

        <div className="numbers">
          <p>
            {" "}
            {this.state.count} {this.props.item.name} ={" "}
            {this.state.count * this.props.item.cal} calories
          </p>
          <button className="reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
