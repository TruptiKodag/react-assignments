import React from 'react';
export default class FormValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.rowValue
        };
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        this.props.addList(this.state.value);
        event.preventDefault();
        this.setState({ value: '' });
    }


    render() {
        return (
            <form className="FormVal" onSubmit={this.handleSubmit.bind(this)}>
                <label> Name:
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
                </label>
                <input type="submit" value="okayyy" />
            </form>

        );
    }

}
FormValue.defaultProps = {
    addList: () => { },
    rowValue: '',
}