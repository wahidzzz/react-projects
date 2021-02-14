import React, { Component } from "react";
import "../index.css";

class Clock extends Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount(){
        this.timer=setInterval(
            ()=>this.setState({date:new Date()}),1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        return(
            <div className="clock">
                <div className="clockItem hour">
                    {this.state.date.getHours()}
                </div> 
                <div className="clockItem minute">
                    {this.state.date.getMinutes()}
                </div>  
                <div className="clockItem seconds">
                    {this.state.date.getSeconds()}
                </div>  
                <div className="clockItem format">
                    {this.state.date.toLocaleTimeString().match(/.{2}$/)} 
                </div>            
            </div>
        )
    }
}
export default Clock;