import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import {ActionsTypes, StoreType} from "./redux/state";


type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes ) => void
}

function App(props: PropsType) {

    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs
                    store={props.store} dispatch = {props.dispatch}/>}/>
                <Route path='/profile'
                       render={() => <Profile profilePage={state.ProfilePage} dispatch={props.dispatch}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
