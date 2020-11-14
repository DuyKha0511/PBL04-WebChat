import React, { Component } from 'react'

export class Group extends Component {
    onShowInfo=()=>
    {
        this.props.onShowInfo(this.props.info.phoneReceiver)
    }
    render() {
        var {info}=this.props;
        return (
            <div>
                <div className="group" onClick={this.onShowInfo}>
                    <img src={info.avatarReceiver}
                        className="img-responsive avatar" alt="img" />
                    <div>
                        <span className="name-receiver">{info.nameReceiver}</span>
                        <span className="side-message">{info.lastestMess}</span>

                    </div>
                </div>                
            </div>
        )
    }
}

export default Group
