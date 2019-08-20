import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
        console.log(this.state.name)
    };

    render() {
        return (
            <div>
            <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
            />
            </div>
        );
        }
}
export default Form;