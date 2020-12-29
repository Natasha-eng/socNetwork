import React from "react";
import './Header.module.css';
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";

function Header(props: any) {
    return (
        <header className={classes.header}>
            <img  alt = "#" src='https://images.app.goo.gl/ZtECpbLQHThk5qat6'/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to ={"/login"}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;