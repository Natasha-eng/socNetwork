import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from './components/Users/UsersContainer';
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {RootStateRedux} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


type MapDispatchPropsType = {
    initializeApp: () => void
}

type MapStatePropsType = {
    initialized: boolean
}

export type PropsType = MapDispatchPropsType & MapStatePropsType

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        // const state = props.store.getState()

        return (
            <div>
                <HeaderContainer/>
                <div className='app-wrapper'>

                   {/* <Navbar/>*/}
                    <div className="app-wrapper-content">
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/news' render={() => <News/>}/>

                        <Route path="/music" render={() => <Music/>}/>

                        <Route path="/settings" render={() => <Settings/>}/>

                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
                <Navbar/>
            </div>

        )
    }
}

const mapStateToProps = (state: RootStateRedux) => ({
    initialized: state.App.initialized
})

let AppContainer =  compose<React.ComponentType>(withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateRedux>(mapStateToProps, {initializeApp}))(App)

let MainApp  = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp
