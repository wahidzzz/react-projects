import React, { Component } from "react";
import "../index.css";

class Social extends Component{
    render(){
        return(
            <div className="social">
                <div className="s-link">
                    <a href="https://www.linkedin.com/in/wahid-shaikh-7b1416148/" target="_blank"><i className="ri-linkedin-fill"></i></a>
                </div>
                <div className="s-link">
                    <a href="https://github.com/wahidzzz/react-projects/tree/digital-clock" target="_blank"><i className="ri-github-fill"></i></a>
                </div>
                <div className="s-link">
                    <a href="https://reactjs.org/docs/getting-started.html" target="_blank"><i className="ri-reactjs-fill"></i></a>
                </div>
              
            </div>
        );
    }
}
export default Social;
