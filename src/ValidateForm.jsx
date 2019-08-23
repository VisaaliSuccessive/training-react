import React, {Component} from 'react';
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required().label('Name').min(3)
})

class ValidateForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
        };
    }
    handleValidate = (e) => {
        // e.preventDefault();
        const { name } = this.state
        schema.validate({name}, {abortEarly: false})
        .then(()=>{
            console.log('success')
        })
        .catch(err =>{
            console.log('error')
        })
    }
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <div>
            <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
            />
            <button onClick={(e)=>this.handleValidate(e)}>Submit</button>
            </div>
        );
        }
}
export default ValidateForm;