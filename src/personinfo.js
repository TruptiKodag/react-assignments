import React from 'react';
import User from './personinformation';
import PerInfo from './perinfo';
export default class PersonInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                { id: 1, Name: "Trupti", Age: 20 },
                { id: 2, Name: "Rahul", Age: 25 },
                { id: 3, Name: "Rk", Age: 35 },

            ]
        }
    }
    addNewValue = (newValue) => {
        //const list=Object.assign([],this.state.list);
        const NewList = [...this.state.list];
        NewList.push(newValue);
        this.setState({ list: NewList });
    };

    deleteValue = (index) => {
        const remList = Object.assign([], this.state.list);
        remList.splice(index, 1);
        this.setState({ list: remList });

    };
    editValueFromList = (index, changeValue) => {
        const editList = [...this.state.list];
        editList[index] = changeValue;
        this.setState({ list: editList });
    };

    render() {
        return (
            <div className="PerInfo">
                <PerInfo addList={this.addNewValue} />
                <User list={this.state.list} remList={this.deleteValue} editValueFromList={this.editValueFromList} />
            </div>

        );
    }
}
