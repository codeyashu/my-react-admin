import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button type="button" class="btn btn-dark">
                {this.props.text}
            </button>
        );
    };
};

export default Button;