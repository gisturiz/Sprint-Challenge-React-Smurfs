import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  };

  updateForm = (e, smurf) => {
    e.preventDefault();
    this.props.setUpdateForm(smurf);
  };

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <button type="submit" onClick={(e) => this.deleteSmurf(e, smurf.id)}>Delete Smurf</button>
              <button type="submit" onClick={(e) => this.updateForm(e, smurf)}>Update Smurf</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
