import React, { Component } from 'react';
class InfoReceiver extends Component {

    render() {
        var {showInfo}=this.props;
        return (
            <div className="card">
                <h5 className="card-header info-color blue-gradient white-text text-center py-4">
                    <div>
                        <img src={showInfo.avatarReceiver}
                            alt="avatar" className="rounded-circle img-responsive modal-title" id="avaReceiver" />
                        <span className="name-receiver"><h5><strong>{showInfo.nameReceiver}</strong></h5></span>
                        <span className="status-activity">{showInfo.statusReceiver===true?'Online':'Offline'}</span>
                    </div>

                </h5>
                <div className="card-body">
                    <ul className="text-center" style={{ color: "#757575" }} action="#!">
                        <li className="card-info md-form ">
                            <a id="phone-receiver" href="/#"> <i className="fas fa-phone-alt "></i>{showInfo.phoneReceiver}</a>
                        </li>
                        <li className="card-info md-form ">
                            <a id="mail-receiver" href="/#"><i className="fas fa-mail-bulk"></i>{showInfo.mailReceiver}</a>
                        </li>
                        <li className="card-info md-form ">
                            <a id="birthday-receiver" href="/#"><i className="fas fa-birthday-cake "></i>{showInfo.birthdayReceiver}</a>
                        </li>
                        <li className="card-info md-form ">
                            <a id="address-receiver" href="/#"><i className="fas fa-home "></i>{showInfo.addressReceiver}</a>
                        </li>
                        <li className="card-info md-form ">
                            <a id="relationship-receiver" href="/#"><i className="fas fa-user-friends "></i>{showInfo.relationship}</a>
                        </li>
                        <li className="card-info md-form ">
                            <a id="become-friend-on" href="/#"><i className="fas fa-tree "></i>{showInfo.becomeFriendOn}</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default InfoReceiver
