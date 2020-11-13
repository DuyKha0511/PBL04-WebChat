import React, { Component } from 'react'

class Action extends Component {
    render() {
        return (
            <div className="row container side-button-list no-gutters">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <button className="side-button btn btn-primary blue-gradient">
                        <span className="fas fa-bell side-button-icon" aria-hidden="true"></span>Chats</button>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <button className="side-button btn">
                        <span className="fas fa-address-book side-button-icon" aria-hidden="true"></span>Contacts</button>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <button className="side-button btn btn-primary blue-gradient">
                        <span className="fas fa-address-book side-button-icon" aria-hidden="true"></span>Contacts</button>
                </div>
            </div>
        )
    }
}

export default Action
