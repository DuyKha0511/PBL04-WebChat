import React, { Component } from 'react'
import Action from './LeftSideBar/Action'
import ListMessages from './LeftSideBar/ListMessages'
import SearchMessage from './LeftSideBar/SearchMessage'
import ListContact from './LeftSideBar/ListContact'
import ListGroup from './LeftSideBar/ListGroup'

class LeftSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DisplayList: 'ListMessages',
            info: [],
            showInfo:null,
        }
    }
    onShowList = (list) => {
        if (list === 'ListContact') {
            this.setState({
                DisplayList: 'ListContact'
            })
        }
        if (list === 'ListMessages') {
            this.setState({
                DisplayList: 'ListMessages'
            })
        }
        if (list === 'ListGroup') {
            this.setState({
                DisplayList: 'ListGroup'
            })
        }
    }
    onGenerateData = () => {
        var info = [
            {
                nameReceiver: 'Zayn',
                phoneReceiver: '0905111111',
                mailReceiver: 'zayn@gmail.com',
                birthdayReceiver: '01 - 01 - 2000',
                addressReceiver: 'addressReceiver1',
                relationship: 'Friend',
                becomeFriendOn: 'Dec 2019',  
                statusReceiver: false,
                lastestMess: 'Hi',
                avatarReceiver: 'https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg'
            },
            {
                nameReceiver: 'Vinh',
                phoneReceiver: '090522222',
                mailReceiver: 'vinh@gmail.com',
                birthdayReceiver: '01 - 01 - 2000',
                addressReceiver: 'addressReceiver1',
                relationship: 'Friend',
                becomeFriendOn: 'Dec 2019',
                statusReceiver: true,
                lastestMess: 'Hello',
                avatarReceiver: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/117001932_1110718096036504_8930080626201132635_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=xw3KAt-NZwUAX_HGLgT&_nc_ht=scontent.fsgn2-2.fna&oh=1e4388ad05943c99c9d3f0de159ef9ea&oe=5FD43DFD'

            },
            {
                nameReceiver: 'Kha',
                phoneReceiver: '090533333',
                mailReceiver: 'kha@gmail.com',
                birthdayReceiver: '01 - 01 - 2000',
                addressReceiver: 'addressReceiver1',
                relationship: 'Friend',
                becomeFriendOn: 'Dec 2019',
                statusReceiver: true,
                lastestMess: 'Alo',
                avatarReceiver: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/125266566_1189225878185725_505053092200166842_o.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=6x3cF8Ugp50AX8nuos7&_nc_ht=scontent.fsgn2-3.fna&oh=31937c2f59747a0f15bc8536e6853903&oe=5FD624A5'

            },
            {
                nameReceiver: 'Cath',
                phoneReceiver: '090544444',
                mailReceiver: 'cath@gmail.com',
                birthdayReceiver: '01 - 01 - 2000',
                addressReceiver: 'addressReceiver1',
                relationship: 'Friend',
                becomeFriendOn: 'Dec 2019',
                statusReceiver: false,
                lastestMess: 'Bonjour',
                avatarReceiver: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/124597719_1188415794933400_5422784238891250944_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Tj_ci1y8MdwAX8xsnHZ&_nc_ht=scontent.fsgn2-1.fna&oh=23bc7e444176df1e250102bb580eba4d&oe=5FD4493A'

            },
        ];
        this.setState({
            info: info
        });
        localStorage.setItem('info', JSON.stringify(info));
    }
    onShowInfo=async(phone)=>
    {
        var {info}=this.state;
        var index=this.findInfo(phone);
        var showInfo=info[index];
        await this.setState({
            showInfo:showInfo
        })
        this.props.showInfo(this.state.showInfo);
    }
    findInfo=(phone)=>
    {
        var result = -1;
        var {info} = this.state;
        info.forEach((info, index) => {
          if (info.phoneReceiver === phone)
            result = index;
        })
        return result;
    }
    render() {
        var { DisplayList, info } = this.state;

        return (
            <div>
                <div className="side-bar">
                    <button className="Generate Data btn" onClick={this.onGenerateData}>Generate Data</button>
                    <div className="row search-side-bar">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <SearchMessage />
                        </div>
                    </div>
                    <Action
                        onShowList={this.onShowList}
                    />
                    <div
                        className="row btn new-event"
                        data-toggle="modal"
                        data-target={DisplayList !== 'ListGroup' ? '#ModalCreateNew' : '#ModalNewChat'}
                    ><i className="fas fa-edit"></i>
                        {DisplayList === 'ListMessages' ? 'New chat' : (DisplayList === 'ListContact' ? 'New contact' : 'New group chat')}</div>
                    <div className="side-bar-content">
                        <div className="list-side-bar-content heading">
                            <span className="txt-side-bar">
                                {DisplayList === 'ListMessages' ? 'MY MESSAGES' : (DisplayList === 'ListContact' ? 'MY CONTACT' : 'MY GROUP')}</span>
                        </div>
                        <div className="list-side-bar-content body ">
                            {DisplayList === 'ListMessages' ?
                                <ListMessages info={info} onShowInfo={this.onShowInfo}/> : (DisplayList === 'ListContact' ?
                                <ListContact info={info} onShowInfo={this.onShowInfo}/> :
                                <ListGroup info={info} onShowInfo={this.onShowInfo}/>)}
                        </div>
                    </div>

                </div>
                <div className="modal fade" id="ModalNewChat" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog cascading-modal modal-avatar modal-sm" role="document">
                        <div className="modal-content">

                            <div className="modal-header">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg" alt="avatar" className="rounded-circle img-responsive" />
                            </div>
                            <div className="modal-body text-center mb-1">

                                <h5 className="mt-1 mb-2">New Group Chat</h5>

                                <div className="md-form ml-0 mr-0">
                                    <input
                                        type="text"
                                        placeholder="Group name"
                                        id="txtEnterGroupName"
                                        className="enter-group-name form-control form-control-sm validate ml-0" />
                                </div>

                                <div className="text-center mt-4">
                                    <button className="btn blue-gradient mt-1"
                                        id="btnNext"
                                        data-dismiss="modal"
                                        data-toggle="modal"
                                        data-target="#ModalCreateNew"
                                    ><i className="fas fa-arrow-right fa-2x"></i></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="modal fade" id="ModalCreateNew" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">
                                    {DisplayList === 'ListMessages' ? 'New Chat' : (DisplayList === 'ListContact' ? 'New Contact' : 'Create New Group')}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <div className="md-form mt-0">
                                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                    <div className="row ml-1 mb-3"><b>PEOPLE</b></div>
                                    <div className="row result-search ml-1">
                                        <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/117001932_1110718096036504_8930080626201132635_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=xw3KAt-NZwUAX_HGLgT&_nc_ht=scontent.fsgn2-2.fna&oh=1e4388ad05943c99c9d3f0de159ef9ea&oe=5FD43DFD"
                                            className="img-responsive avatar" alt="img" />
                                        <div>
                                            <span className="name-receiver">Vinh</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button
                                    className="btn blue-gradient"
                                    id="btnDone"
                                    data-dismiss="modal"
                                >Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default LeftSideBar
