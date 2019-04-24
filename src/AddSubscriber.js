
import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component {
    render() {
        return (

            <div>
                <Header heading="ADD Subscriber" />
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscirber-form">
                    </form>
                </div>
            </div>
        );
    }
}
export default AddSubscriber;