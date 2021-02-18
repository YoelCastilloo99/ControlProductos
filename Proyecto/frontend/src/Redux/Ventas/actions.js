import Types from "../Ventas/types";
import axios from "axios";

const host = 'http//:127.0.0.1' 

export const getVentas = () => {
    return dispatch => {
        dispatch({type:Types.VENTAS_LOADING, payload:true})
        axios.get("http://127.0.0.1:8000/api/ventas").then(response => {
            dispatch({type:Types.GET_VENTAS, payload:response.data
            })
        console.log('response', response)
        }
            )
            .catch(err => {
                console.log(err)
                dispatch({type:Types.VENTAS_LOADING, payload:false})
            }
            );
    }
}

export const deleteVentas = (id) => {
    return dispatch => {
        dispatch({type:Types.VENTAS_LOADING, payload:true})
        axios.delete("http://127.0.0.1:8000/api/ventas/"+id+"/")
            .then(response => {
                dispatch({type:Types.DELETE_VENTAS, payload:id});
            }
            )
            .catch(err => {
                console.log(err)
            }
            );
    }
}

export const createVentas = (data,cb) => {
    return dispatch => {
        axios.post("http://127.0.0.1:8000/api/ventas/", data)
            .then(response => {
                console.log(response)
                dispatch({type:Types.CREATE_VENTAS, payload:response.data});
                cb()
            }
            )
            .catch(err => {
                console.log(err)
                dispatch({type:Types.VENTAS_LOADING, payload:false})
            }
            );
    }
}