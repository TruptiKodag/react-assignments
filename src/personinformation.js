import React from 'react';
import PerInfo from './perinfo';
export default class User extends React.Component {
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
            <div className="PerInfo">
                <ol>
                    {this.props.list.map((person, index) => (
                        <li key={index}>
                            {this.state.editIndex === index ?
                                <PerInfo
                                    rowValue={person.name}
                                    addList={(name) => { this.addList(index, name) }} />
                                :
                                <div>

                                    <span>{person.name}</span>
                                    <button onClick={() => { this.props.remList(index) }}>delete</button>
                                    <button onClick={() => { this.editIndex(index) }}>edit</button>
                                </div>
                            }
                        </li>
                    ))
                    }
                </ol>
            </div>

        );
    }
}

