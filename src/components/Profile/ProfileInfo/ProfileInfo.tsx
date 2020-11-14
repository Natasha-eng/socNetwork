import React from "react";
import classes from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>
            <div>
                <img alt="#" src="https://images.app.goo.gl/6yFxj7XkVWRLSSwz7"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;