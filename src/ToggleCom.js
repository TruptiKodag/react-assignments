import React, {Component} from 'react';


class Parent extends React.Component {
    constructor() {
        super();
        this.state={
        active:true,
    };
    }
  handleClick (){
        this.setState({
        active : !this.state.active,
    });
    
    }
    
    render() {      
        return ( <div className="ComToggle"> 
                <button type="button" onClick={this.handleClick.bind(this)}>
                   ToggleComp
                </button>
            <p>{this.state.active ? <Child/>:<OtherComponent/>}</p>

            </div>  
                      
        );           
    }
}

class Child extends React.Component {
    render() {

        return (    
            <div>          
               <h1>I am the child</h1> 
            </div>            
        )             
    }
}

class OtherComponent extends React.Component {
    render() {       
        return (    
            <div>          
               <p>I am the OtherComponent</p> 
            </div>            
        )           
    }
}
export default Parent;