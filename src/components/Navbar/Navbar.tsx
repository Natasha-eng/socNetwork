import React from "react";
import navStyles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard} from "@fortawesome/free-regular-svg-icons/faAddressCard";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import {faNewspaper} from "@fortawesome/free-regular-svg-icons/faNewspaper";
import {faHeadphones} from "@fortawesome/free-solid-svg-icons/faHeadphones";
import {faUserCog} from "@fortawesome/free-solid-svg-icons/faUserCog";

function Navbar() {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.item}>
                <NavLink to="/profile" activeClassName={navStyles.activeLink}>
                    <div className={navStyles.icon}>
                        <FontAwesomeIcon icon={faAddressCard} className={navStyles.fa}/>
                        <FontAwesomeIcon icon={faAddressCard} className={navStyles.fa}/>
                    </div>
                    Profile
                </NavLink>
            </div>
            <div className={`${navStyles.item} ${navStyles.activeLink}`}>
                <NavLink to="/dialogs" activeClassName={navStyles.activeLink}>
                    <div className={navStyles.icon}>
                        <FontAwesomeIcon icon={faEnvelope} className={navStyles.fa}/>
                        <FontAwesomeIcon icon={faEnvelope} className={navStyles.fa}/>
                    </div>
                    Messages
                </NavLink>
            </div>
            <div className={navStyles.item}>
                <NavLink to="/users" activeClassName={navStyles.activeLink}>
                    <div className={navStyles.icon}>
                        <FontAwesomeIcon icon={faUsers} className={navStyles.fa}/>
                        <FontAwesomeIcon icon={faUsers} className={navStyles.fa}/>
                    </div>
                    Users
                </NavLink>
            </div>
            <div className={navStyles.item}>
                <NavLink to="/news" activeClassName={navStyles.activeLink}>
                    <div className={navStyles.icon}>
                        <FontAwesomeIcon icon={faNewspaper} className={navStyles.fa}/>
                        <FontAwesomeIcon icon={faNewspaper} className={navStyles.fa}/>
                    </div>
                    News
                </NavLink>
            </div>
            <div className={navStyles.item}>
                <NavLink to="/music" activeClassName={navStyles.activeLink}>
                    <div className={navStyles.icon}>
                        <FontAwesomeIcon icon={faHeadphones} className={navStyles.fa}/>
                        <FontAwesomeIcon icon={faHeadphones} className={navStyles.fa}/>
                    </div>
                    Music
                </NavLink>
            </div>
            <div className={navStyles.item}>
                <NavLink to="/settings" activeClassName={navStyles.activeLink}>
                    <div className={navStyles.icon}>
                        <FontAwesomeIcon icon={faUserCog} className={navStyles.fa}/>
                        <FontAwesomeIcon icon={faUserCog} className={navStyles.fa}/>
                    </div>
                   Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;