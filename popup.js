import { showDataPopup} from "../Actions";
export const showAddData = () => {
    return async (dispatch) => {
        dispatch(showDataPopup());
    }
}

