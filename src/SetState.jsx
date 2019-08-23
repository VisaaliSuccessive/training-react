import React, {Component} from 'react';

class SetState extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:0,
            message:"Message Text"
        }
    }

    shouldComponentUpdate() {
        console.log('Inside should component update');
        return true;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Inside getDerivedStateFromProps');
        return null;;
    }

    componentDidUpdate() {
        console.log('Inside componentwill update');
    }


    handleOnClick = () => {
        this.setState({
            value: this.state.value+1
        });
    }

    render(){
        console.log('Inside render')
        return(
            <button onClick={this.handleOnClick}>
                {this.state.value} {this.state.message}
            </button>
        )
    }
}

export default SetState