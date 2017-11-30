import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import { addGuest, deleteGuest } from './ducks/guestList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(newGuest) {
    this.setState({ input: newGuest });
  }

  handleSubmit() {
    console.log(this.state.input);
    this.props.addGuest(this.state.input);
    this.setState({
      text: ''
    })
  }

  handleDelete(guest) {
    this.props.deleteGuest(guest);
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button onClick={ () => this.handleDelete(guest) }>Remove</button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input value={ this.state.input } type="" className="" onChange={ (e) => this.handleChange(e.target.value) }/>
          <button onClick={ this.handleSubmit }>Add</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

export default connect(mapStateToProps, { addGuest, deleteGuest })(App);
