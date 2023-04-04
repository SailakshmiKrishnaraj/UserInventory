import { userConstants } from "../Main Content/Constants/userConstants";

export function setTableData(data) {
    return { type: userConstants.USERCREDENTIALS.SET_DATA, payload: { data } };
}

export function EditData(data) {
    return { type: userConstants.USERCREDENTIALS.EDIT_DATA, payload: { data } };
}
export function showDataPopup() {
    return { type: userConstants.USERCREDENTIALS.SHOW };
}
export function hidePopup() {
    return { type: userConstants.USERCREDENTIALS.HIDE };
}
export function viewDataPopup(data){
    debugger;
    return {type:userConstants.USERCREDENTIALS.VIEW_DATA,payload: {data}}
}