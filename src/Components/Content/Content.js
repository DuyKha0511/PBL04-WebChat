import React, { Component } from 'react'
import './Content.css'
import Conversation from './Components/Conversation'
import LeftSideBar from './Components/LeftSideBar'
import InfoReceiver from './Components/InfoReceiver'
class Content extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            showInfo:null
        }
    }
    showInfo=(data)=>
    {
        this.setState({
            showInfo:data
        })
    }
    render() {
        var {showInfo}=this.state;
        return (
            <div>
                <div className="row no-gutters">
                    {/* List message */}
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <LeftSideBar showInfo={this.showInfo}/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="middle-bar">
                        {showInfo===null?'':<Conversation openConvTab={this.state.showInfo}/>}

                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="right-bar ">
                        {showInfo===null?'':<InfoReceiver showInfo={showInfo}/>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
