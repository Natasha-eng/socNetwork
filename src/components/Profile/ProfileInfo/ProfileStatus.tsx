import React from "react";
import classes from './ProfileInfo.module.css';
import {ReactComponent} from "*.svg";

type ProfileStatusType = {
    status: string
}


export class ProfileStatus extends React.Component <ProfileStatusType>{
    state = {
        editMode: false
    }

    activateEditMode() {
        debugger
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}
