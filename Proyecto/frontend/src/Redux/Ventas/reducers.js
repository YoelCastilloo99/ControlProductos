import Types from "../Ventas/types";
const initialState = {
    ventas: [],
    loading:false
};

const ventaReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.VENTAS_LOADING: {
            console.log("create_item");
            return {...state,loading: action.payload};
        }

        case Types.GET_VENTAS: {
            return {...state,ventas: action.payload};
        }

        case Types.DELETE_VENTAS: {
            return {...state, ventas: state.ventas.filter(ventas => ventas.id != action.payload)}
        }
        default:
            return state;
    }
}

export default ventaReducer;