import React, { Component } from 'react'
import Action from './LeftSideBar/Action'
import ListMessages from './LeftSideBar/ListMessages'
import SearchMessage from './LeftSideBar/SearchMessage'

class LeftSideBar extends Component {
    render() {
        return (
            <div className="side-bar">
                <div className="row search-side-bar">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <SearchMessage />
                    </div>
                </div>
                <Action />
                <div className="side-bar-content">
                    <ListMessages />
                </div>
            </div>
        )
    }
}

export default LeftSideBar
