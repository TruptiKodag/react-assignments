import React from 'react';
import FormValue from './formvalue';
export default class ListValue extends React.Component {
    constructor() {
        super();
        this.state = {
            editIndex: -1,
        }

    }

    editIndex(index) {
        this.setState({ editIndex: index })
    }
    addList(index, value) {
        this.props.editValueFromList(index, value);
        this.setState({ editIndex: -1 })
    }

    render() {
        return (

            <ol>
                {this.props.list.map((value, index) => (
                    <li key={index}>
                        {this.state.editIndex === index ?
                            <FormValue
                                rowValue={value}
                                addList={(value) => { this.addList(index, value) }} />
                            :
                            <div>

                                <span>{value}</span>
                                <button onClick={() => { this.props.remList(index) }}>delete</button>
                                <button onClick={() => { this.editIndex(index) }}>edit</button>
                            </div>
                        }
                    </li>
                ))}
            </ol>

        );
    }
}
//<button onClick={this.props.remList.bind.(this, index)}>delete</button>