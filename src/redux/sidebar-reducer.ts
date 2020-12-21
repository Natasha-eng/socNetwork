import {RootStateType, SidebarType} from "./store";
import {ActionsTypes} from "./redux-store";

let initialState = {}

const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {


    return state;
}

export default sidebarReducer;