import React from 'react';
class FalValue extends React.Component {
      
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
    return(<div className="FalVal">
    <p> {this.state.ShowName?'false':false}</p>
    <p> {this.state.ShowName?'null':null}</p>
    <p> {this.state.ShowName?'undefined':undefined}</p>
    <p> {this.state.ShowName?'string':' '}</p>
    <p>{this.state.ShowName?'nan':NaN}</p>
    <p> {this.state.ShowName?'zero':0}</p>
    <button onClick={this.toggle.bind(this)} >{this.state.ShowName?'one':'two'}</button>

    </div>  
    );
    
    }
}
    export default FalValue;