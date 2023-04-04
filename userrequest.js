import { GetInventoryData } from "../Services";
import { setTableData,  EditData ,viewDataPopup} from "../Actions";
export const setData = () => {
    return async (dispatch) => {
        try {
            const response = await GetInventoryData();
            dispatch(setTableData(response.data.filter((val, idx) => idx < 20)));
       }
        catch (err) {
            console.error(err);
        }
    }
}
export const EditDataService = (data) => {
    return async (dispatch) => {
        await dispatch(EditData(data));
    }
}

export const ViewData = (data) => {
    return async (dispatch) => {
        debugger;
        dispatch(viewDataPopup(data));
    }
}

