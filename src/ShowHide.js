import React, {Component} from 'react';


class ParentShow extends React.Component {
    constructor() {
        super();
        this.state={
        active:true,
        show:true,
    };
    }
  handleClick (){
        this.setState({
        active : !this.state.active,
        showDiv:!this.state.show,
    });
    
    }
    
    render() {      
        return ( <div className="DivWrap">  
        
        <button type="button" onClick={this.handleClick.bind(this)}>
            ShowHide
            
         </button>
         <p>{this.state.active?<div className="DivWr"></div>:''}</p>
            
            </div>  
            
                      
        );           
    }
}

class Child extends React.Component {
    render() {

        return (    
            <div>          
               <p>I am the child</p> 
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
export default ParentShow;