import React from 'react';
export default class ToDoAppl extends React.Component{
    constructor(){
        super();
        this.state={list:["a","b"],
                   value:''
        }
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        });
    }
    onSubmit(event){
        console.log(this.state.list);
    event.preventDefault();
   const list=Object.assign([],this.state.list);
    list.push(this.state.value);
        this.setState({
            list:list
            
            });
        
    }

    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" onChange={this.handleChange.bind(this)}/>
                <input type="submit" value="change"/>
        <ol className="OrderList">{this.state.list.map(value=>{return <li> {value} </li>})}</ol>
    
           </form> 
        );
    }
}
           