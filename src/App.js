

import React from 'react';
import './App.css';
import image from './assets/1.jpg';
import NameEffect from "./Name";
import NameToggle from "./NameToggle";
import NamePrp from "./props";
import Parent from "./ToggleCom";
import FalValue from "./falsy";
import ParentC from "./ClassToggle";
import ParentShow from "./ShowHide";
import MyFriend from "./Property";
import MyForm from "./FormList";
import ToDoAppl from "./listtodo";
import DisplayValue from './displayvalue';
import ParentColor from './ColorComponent/ParentColor';
import PersonInfo from './personinfo';

class App extends React.Component {
    render() {
        return (< div className="App" >
            <h1 > webmogambo </h1>
            <img src={image} alt=" " />
            <button>OK</button>
            <h1>TRUPTI</h1>
            <NameEffect />
            <NameToggle />
            <Parent />
            <ParentC />
            <FalValue />
            <ParentShow />
            <MyFriend />
            <ToDoAppl />
            <DisplayValue />
            <PersonInfo />

            <NamePrp a='hiiii' />
            <ParentColor />
            <MyForm />

        </div>

        );
    }
}




export default App;