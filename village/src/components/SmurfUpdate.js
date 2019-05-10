import React, { Component } from 'react';

class SmurfUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeSmurf: {
                name: this.props.smurf.name,
                age: this.props.smurf.age,
                height: this.props.smurf.height,
            }
        };
    }

    changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
    
        this.setState(prevState => ({
          changeSmurf: {
            ...prevState.changeSmurf,
            [ev.target.name]: value
          }
        }));
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.updateSmurf(this.state.changeSmurf, this.props.smurf.id);
      };

    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.changeHandler}
                        placeholder="Name"
                        value={this.state.changeSmurf.name}
                        name="name"
                    />
                    <input
                        onChange={this.changeHandler}
                        placeholder="Age"
                        value={this.state.changeSmurf.age}
                        name="age"
                    />
                    <input
                        onChange={this.changeHandler}
                        placeholder="Height"
                        value={this.state.changeSmurf.height}
                        name="height"
                    />
                    <button type="submit">Update Smurf</button>
                </form>
            </div>
        );
    }
}

export default SmurfUpdate;
