import React, {Component} from 'react';

export default class MyFriend extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
        }
    }
    Toggle(setName){
        this.setState({
            name:setName,
        })
    }

render() {      
    return ( <div className="PDiv"> 
        <h1>My Friend Is</h1>
        <h2>{this.state.name}</h2>
        <Child frnd={this.Toggle.bind(this)}/>
            

        </div>  
                  
    );           
}
}
class Child extends React.Component {
    constructor() {
        super();
        this.state={};
    }
  ToggleName(){
       this.props.frnd("MAYUR"); 
    }
    render(){
           return(<div className="CDiv">
            <button onClick={this.ToggleName.bind(this)}>OKAY</button>
        </div>
         );
       }
}

    

