import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card card col-4">
                <div className="card-body">
                    <h4 className="card-title">
                        This is a card
                    </h4>
                    <h6 className="card-text">
                        Card description.
                    </h6>
                </div>
            </div>
        );
    };
};

export default Card;