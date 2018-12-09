import React from 'react';
class NamePrp extends React.Component {

    constructor() {
        super();
        this.state = {
            Name: 'Trupti',
            ShowName: true,
        };

    }


    toggle() {
        this.setState({
            Name: "Kodag",
            ShowName: !this.state.ShowName,

        });
    }

    render() {
        return (<div className="DashBoar">
            <h1>{this.props.a}</h1>
            <button onClick={this.toggle.bind(this)} >{this.state.ShowName ? 'Nenha' : 'Kakkar'}</button>
            <p> {this.state.ShowName ? 'TRUPTI' : 'XYZ'}</p>
        </div>
        );

    }
}

export default NamePrp;