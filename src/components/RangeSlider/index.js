import React, { Component } from 'react'
import './RangeSlider.css'
export default class RangeSlider extends Component {

    render() {
        return (
            <div>
                <div class="slidecontainer">
                    <input type="range" 
                    min={this.props.min}
                    max={this.props.max} 
                    value={this.props.rs_value} 
                    className="slider" 
                    id={this.props.id}
                    onInput={this.props.handleOnInput} />
                </div>
                {this.props.display_value?this.props.rs_value:null}
            </div>
        )
    }
}
