import { UserCredentials } from "../../Config/initialState";
import { userConstants } from "../../Main Content/Constants/userConstants";
function userReducer(state = UserCredentials, action) {
    switch (action.type) {
        case userConstants.USERCREDENTIALS.SHOW:
            return { ...state, show: true, action: "Add"};
        case userConstants.USERCREDENTIALS.HIDE:
            return { ...state, show: false };
        case userConstants.USERCREDENTIALS.SET_DATA:
            return { ...state, data: action.payload.data };
        case userConstants.USERCREDENTIALS.EDIT_DATA:
            return { ...state, show: true, action: 'Edit', rowdata: action.payload.data };
        case userConstants.USERCREDENTIALS.UPDATE_DATA:
            return { ...state, header: 'Update', rowdata: action.payload.rowdata };
        case userConstants.USERCREDENTIALS.VIEW_DATA:
            debugger;
            return { ...state, show: true, action: "View" ,rowdata: action.payload.data };
        default:
            return state;
    }
}
export default userReducer;