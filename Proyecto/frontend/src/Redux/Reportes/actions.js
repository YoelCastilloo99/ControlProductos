import Types from "../Reportes/types";
import axios from "axios";

const host = 'http//:127.0.0.1' 

export const getReportes = () => {
    return dispatch => {
        dispatch({type:Types.REPORTES_LOADING, payload:true})
        axios.get("http://127.0.0.1:8000/api/reportes/reporteunodostres").then(response => {
            dispatch({type:Types.GET_REPORTES, payload:response.data
            })
        console.log('reportes', response)
        }
            )
            .catch(err => {
                console.log(err)
                dispatch({type:Types.REPORTES_LOADING, payload:false})
            }
            );
    }
}