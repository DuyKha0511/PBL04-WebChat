import React, { Component } from 'react';

class MessageSend extends Component {
    render() {
        return (
            <div className="row message-body">
                <div className="col-sm-12 message-main-sender">
                    <div className="sender">
                        <div className="message-text">
                            {/* {How about you man?} */}
                            {this.props.message}
                        </div>
                        <span className="message-time pull-right">
                            {this.props.time}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageSend;