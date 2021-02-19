import Types from "../Reportes/types";
import store from "../store";

const initialState = {
    reportes: null,
    loading:false
};

const reporteReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_REPORTES: {
            return {...state,reportes: action.payload};
        }
        default:
            return state;
    
    }
}

export default reporteReducer;