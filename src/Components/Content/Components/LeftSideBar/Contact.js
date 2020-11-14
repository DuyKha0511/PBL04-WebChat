import React, { Component } from 'react'

export class Contact extends Component {
    onShowInfo=()=>
    {
        this.props.onShowInfo(this.props.info.phoneReceiver)
    }
    render() {
        var {info}=this.props;
        return (
            <div className="contact"
                onClick={this.onShowInfo}>
                <img
                    src={info.avatarReceiver}
                    className="img-responsive avatar"
                    alt="img" />
                <div>
                    <span className="name-receiver">{info.nameReceiver}</span>
                </div>
            </div>
        )
    }
}

export default Contact
