import React from 'react';
import './component.css';

export default class Form extends React.Component{
    state = {
            text: '',
            number: 0,
            visible: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            visible: false

        })
    }
    checkText = text =>{
        for(let i = 0; i < text.length; i++){
            if(text[i] !== '1' && text[i] !== '0'){
                return false;
            }
        }
        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.checkText(this.state.text)){
            const num =  parseInt(this.state.text, 2);
            
            this.setState({
                text: '',
                number: num,
                visible: true
            })
        }else{
            this.setState({
                number: "Wrong type",
                visible: true
            })
        }
        
    }



    render(){
        return (
            <div className="form-div" >
                <form onSubmit={this.handleSubmit} autocomplete="off">
                    <input 
                    id="binary" 
                    name="text" 
                    placeholder='Enter Binary Number' 
                    onChange={this.handleChange} 
                    value={this.state.text}
                    />
                    <button className="button" onClick={this.handleSubmit}>Convert</button>
                </form>
                <div className="answer-box">
                    <div className="answer">
                        {
                        this.state.visible ? 
                        <div className="hidden">{this.state.number}</div>:
                        null 
                        }
                    </div>
                </div>
            </div>
        )
    }

}