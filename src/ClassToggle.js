import React from 'react';


class ParentC extends React.Component {
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
        return ( <div className="ClsToggle">  
        <button type="button" onClick={this.handleClick.bind(this)}>
            ToggleDiv
            
         </button>
         <p>{this.state.active?<div className="ClsssToggle"></div>:<div className="ClssToggle"></div>}</p>
            
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
export default ParentC;