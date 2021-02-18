import Types from "./types";
const initialState = {
    productos: [],
    loading:false
};

const productoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.POSTS_LOADING: {
            console.log("create_item");
            return {...state,loading: action.payload};
        }

        case Types.GET_POSTS: {
            return {...state,productos: action.payload};
        }

        case Types.DELETE_POST: {
            return {...state, productos: state.productos.filter(productos => productos.id != action.payload)}
        }
        default:
            return state;
    }
}

export default productoReducer;