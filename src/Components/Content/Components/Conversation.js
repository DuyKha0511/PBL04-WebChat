import React, { Component } from 'react';
import MessageSend from './Conversation/MessageSend';
// import MessageReceive from './Conversation/MessageReceive';

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages : []
        };
    }

    onSendMessage = () => {
        var {messages} = this.state;
        var data = [this.refs.txtMessage.value, new Date().toLocaleString()];
        messages.push(data);
        this.refs.txtMessage.value = "";
        this.setState({
            messages : messages
        });
    }

    onEnterPress = (e) => {
        if (e.key === 'Enter')
        {
            e.preventDefault();
            this.onSendMessage();
        }
    }

    render() {
        var {messages} = this.state;
        var listMessage = messages.map((message, index) => {
            return  <MessageSend
                        message = {message[0]}
                        time = {message[1]}
                    />
        });
        var {openConvTab}=this.props;

        return (
            <div className="conversation">
                <div className="row heading no-gutters">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                        <div className="heading-avatar">
                        <div className="heading-avatar-icon">
                            <img src={openConvTab.avatarReceiver} alt="ava" />
                        </div>
                        </div>

                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
                        <div className="heading-name">
                        <a className="heading-name-meta" href="/#">{openConvTab.nameReceiver}</a>
                        <span className="heading-online">{openConvTab.statusReceiver===true?'Online':'Offline'}</span>
                        </div>

                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                        <div className="heading-dot pull-right">
                        <i className="fa fa-ellipsis-v fa-2x pull-right " aria-hidden="true"></i>

                        </div>
                    </div>
                </div>

                <div className="row message" id="conversation">
                    <div className="row message-previous">
                        <div className="col-sm-12 previous">
                            <a id="ankitjain28" name="20" href="/#">
                                Show Previous Message!
                            </a>
                        </div>
                    </div>
                    {listMessage}
                </div>

                <div className="row reply">
                    <div className="col-sm-1 col-xs-1 reply-emojis">
                        <i className="fas fa-smile-beam fa-2x"></i>
                    </div>
                    <div className="col-sm-1 col-xs-1 reply-recording">
                        <i className="fas fa-folder-open fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-9 col-xs-9 reply-main">
                        <textarea 
                            className="txtConv form-control" 
                            rows="1" id="comment" placeholder="Aa" autoFocus
                            ref = "txtMessage"
                            onKeyDown={this.onEnterPress}
                        ></textarea>
                    </div>
                    <div className="col-sm-1 col-xs-1 reply-send">
                        <i 
                            className="fas fa-paper-plane fa-2x" aria-hidden="true"
                            onClick = {this.onSendMessage}
                            //onKeyDown={this.onEnterPress}
                        ></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conversation;
