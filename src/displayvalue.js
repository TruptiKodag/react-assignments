
import React from 'react';
import FormValue from './formvalue';
import ListValue from './listvalue';
export default class DisplayValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["a", "b"],
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
            <div className="FormVal">
                <FormValue addList={this.addNewValue} />
                <ListValue list={this.state.list} remList={this.deleteValue} editValueFromList={this.editValueFromList} />
            </div>
        );
    }
}
