import React, { Component } from 'react';

export class Live extends Component {
    constructor() {
        super()
        this.state = {
            value: '444444444444444444444'
        }
    }
    componentDidMount() {

    }
    handleChange(value) {
        this.setState({
            value
        })
    }

    render() {
        return <div></div>
    }
}

export default Live;
