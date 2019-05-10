import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeItem: null
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs/")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err =>
        console.log(err));
    this.props.history.push('/');
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err =>
        console.log(err));
  };

  updateSmurf = (updatedSmurf, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, updatedSmurf)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err =>
        console.log(err));
    this.props.history.push('/');
  };

  setUpdateForm = item => {
    this.setState({ activeItem: item });
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="App">
        <nav>
          <div>
            <NavLink className="nav-links" exact to="/">Smurf Home</NavLink>
            <NavLink className="nav-links" to="/smurf-form">Add Smurf</NavLink>
          </div>
        </nav>
        <Route
          path="/smurf-form"
          render={() =>
            <SmurfForm addSmurf={this.addSmurf} />} />
        <Route
          exact path="/"
          render={props =>
            <Smurfs {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              setUpdateForm={this.setUpdateForm} />} />
      </div>
    );
  }
}

export default App;