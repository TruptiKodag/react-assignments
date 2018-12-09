import React from 'react';
export default class ToDoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }


    handleSubmit(event) {
        alert(this.state.value);
        this.setState = { value: '' };

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="FormContent">
                <label>
                    NAME:
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>

                </label>
                <br />
                <input type="submit" value="SUBMIT"></input>
            </form>
        );
    }
}
