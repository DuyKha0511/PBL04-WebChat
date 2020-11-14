import React, { Component } from 'react'
import Message from './Message';

export class ListMessages extends Component {
    render() {
        var { info } = this.props;
        var showAllMess = info.map((info, index) => {
            return (<Message
                key={info.phoneReceiver}
                index={index}
                info={info}
                onShowInfo={this.props.onShowInfo}
            />);
        })
        return (
            <div>
                {showAllMess}
            </div>
        );

    }
}

export default ListMessages
