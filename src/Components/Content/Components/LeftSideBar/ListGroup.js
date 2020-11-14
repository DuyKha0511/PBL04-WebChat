import React, { Component } from 'react'
import Group from './Group';

export class ListGroup extends Component {
    render() {
        var { info } = this.props;
        var showAllGroup = info.map((info, index) => {
            return (<Group
                key={info.phoneReceiver}
                index={index}
                info={info}
                onShowInfo={this.props.onShowInfo}
            />);
        })
        return (
            <div>
                {showAllGroup}
            </div>                
        );
    }
}

export default ListGroup
