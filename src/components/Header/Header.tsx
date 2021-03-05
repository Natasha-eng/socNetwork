import React from "react";
import './Header.module.css';
import headerStyle from './Header.module.css';
import {NavLink, Route} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChessQueen} from "@fortawesome/free-solid-svg-icons/faChessQueen";
import Navbar from "../Navbar/Navbar";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

function Header(props: HeaderPropsType) {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.logo}><FontAwesomeIcon icon={faChessQueen} className={headerStyle.fa}/> social network</div>
           {/* <Navbar/>*/}
            <div className={headerStyle.loginBlock}>{props.isAuth ?
                    <div className={headerStyle.loggedName}>{props.login}<button onClick={props.logout}>Log
                        out</button></div>
                    : <NavLink to={"/login"}>Log in</NavLink>}
            </div>
        </header>
    )
}

export default Header;