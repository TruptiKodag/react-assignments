import React from 'react';
class NameEffect extends React.Component {
      
    constructor() {
        super();
        this.state={
            Name: 'TONNY',
         };
       
    }
   
    
    changeName() {
            console.log("changeName");
            console.log(this.state);
            this.setState({
                Name: "Kodag",
                on:!this.state.on,
                
        });
    }
    
    render(){
        console.log(this);
    return(<div className = "DashBoard">
             {this.state.on && <h1>HELLO</h1>}
            {!this.state.on && <h2>WORLD</h2>}

            {!this.state.changeName}
            <h1>He is singer {this.state.Name} He is {2*3*4} year's old</h1>
            <button onClick={this.changeName.bind(this)} >toggle</button>
    </div>  
    );
    
    }
}
    export default NameEffect;