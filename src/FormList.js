import React from 'react';
export default class MyForm extends React.Component{
    constructor(){
        super();
        this.state={
            value:'',
           
        };
        
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({
                value:event.target.value
        });
    }
        
 
    handleSubmit(event){
        alert(this.state.value);
        this.setState={value:''};      
       
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
           <label>
	    NAME:
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
            
</label>
<br/>		
	<textarea type="text" value={this.state.value} onChange={this.handleChange}>
	    </textarea>
            <br/>
            <input type="checkbox" value="pune" onChange={this.handleChange} />PUNE<br/>
            <input type="checkbox" value="mumbai"  onChange={this.handleChange}/>MUMBAI<br/>
            <input type="checkbox" value="banglore"  onChange={this.handleChange}/>BANGLORE<br/>
            <input type="checkbox"  value="delhi"  onChange={this.handleChange}/>DELHI<br/>
            <br/>

<select type="text" value={this.state.value} onChange={this.handleChange}>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JAVASCRIPT</option>
                <option value="react">REACT</option>
            </select>
            <br/>
           
        <input type="radio" name="xyz"  value="male" onChange={this.handleChange}/>male
            <input type="radio" name="xyz" value="female" onChange={this.handleChange} />female
            <br/>
            
            <input type="submit" value="SUBMIT"></input>
        </form>
        );
    }
}