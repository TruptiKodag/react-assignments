import React from 'react';
class NameToggle extends React.Component {
      
    constructor() {
        super();
        this.state={
            Name: 'TONNY',
            ShowName:true,
         };
       
    }
   
    
    toggle() {
            this.setState({
                Name: "Kodag",
                ShowName:!this.state.ShowName,
                
        });
    }
    
    render(){
    return(<div className="NmToggle">
    <button onClick={this.toggle.bind(this)} >{this.state.ShowName?'Nenha':'Kakkar'}</button>
    <p> {this.state.ShowName?'TRUPTI':'RAHUL'}</p>
  
    </div>  
    );
    
    }
}
    export default NameToggle;