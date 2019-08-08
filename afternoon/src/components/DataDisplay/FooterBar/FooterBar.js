import React, { Component } from 'react'; 
import './FooterBar.css'

export default class FooterBar extends Component {
    render() {
        return(
            <div>
                <div className="movement-buttons">
                <span className="previous-button" onClick={this.props.decrementIndex}>&laquo; Previous</span>
                <span className="next-button" onClick={this.props.incrementIndex}>Next &raquo;</span>
                </div>
            </div>
        )
    }
}