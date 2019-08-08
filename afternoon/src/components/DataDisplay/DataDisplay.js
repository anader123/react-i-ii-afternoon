import React, { Component } from 'react'; 
import './DataDisplay.css'; 
import data from '../../../../react-i-ii-afternoon/data'; 
import Footer from './FooterBar/FooterBar';

export default class DataDisplay extends Component {
    constructor() {
        super(); 

        this.state = {
            indexCount: 0 
        }
    }

    incrementIndex = () => {
        if(this.state.indexCount === 24) {
           this.setState ({
               indexCount: 0
           })
        }
        else {
            this.setState ({
                indexCount: this.state.indexCount + 1 
            })
        }
    }

    decrementIndex = () => {
        if(this.state.indexCount === 0) {
           this.setState ({
               indexCount: 24
           })
        }
        else {
            this.setState ({
                indexCount: this.state.indexCount - 1
            })
        }
    }

    render(){
    return (
        <div>
            <div className="display-data-box">
                <div className="reference-number">
                    <span>{this.state.indexCount + 1}/{data.length}</span>
                </div>

                <div className="full-name">
                    <span>{data[this.state.indexCount].name.first} {data[this.state.indexCount].name.last}</span>
                </div>

                <div className="personal-info">
                    <ul>
                        <li><span className="bold-title">From: </span>{data[this.state.indexCount].city}, {data[this.state.indexCount].country}</li>
                        <li><span className="bold-title">Job Title: </span>{data[this.state.indexCount].title}</li>
                        <li><span className="bold-title">Employer: </span>{data[this.state.indexCount].employer}</li>
                    </ul>

                    <ol className="favorite-movies-list"> 
                        <span className="bold-title">Favorite Movies:</span>
                        <li>{data[this.state.indexCount].favoriteMovies[0]}</li>
                        <li>{data[this.state.indexCount].favoriteMovies[1]}</li>
                        <li>{data[this.state.indexCount].favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
            <Footer decrementIndex={this.decrementIndex} incrementIndex={this.incrementIndex}/> 
        </div>
    )
    }
    
}