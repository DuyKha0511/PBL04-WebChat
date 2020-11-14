import React, { Component } from 'react'
import Contact from './Contact'
export class ListContact extends Component {

    render() {
        var { info } = this.props;
        var showAllContact = info.map((info, index) => {
            return (<Contact
                key={info.phoneReceiver}
                index={index}
                info={info}
                onShowInfo={this.props.onShowInfo}
            />);
        })
        return (
            <div >
                {showAllContact }
            </div>
        )
    }
}

export default ListContact
