
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
                        <label htmlFor="name" className="label-control">Name: </label>
                        <br />
                        <input type="text" id="name" className="input-control" name="name" /> <br /><br />

                        <label htmlFor="phone" className="label-control">Phone: </label>
                        <br />
                        <input type="text" id="phone" className="input-control" name="phone" /> <br /><br />
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added</span><br />
                            <span className="subscriber-info">Name: </span><br />
                            <span className="subscriber-info">Phone: </span>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>

                    </form>
                </div>
            </div>
        );
    }
}
export default AddSubscriber;