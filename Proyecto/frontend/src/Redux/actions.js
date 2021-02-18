import Types from "./types";
import axios from "axios";

const host = 'http//:127.0.0.1' 

export const getPosts = () => {
    return dispatch => {
        dispatch({type:Types.POSTS_LOADING, payload:true})
        axios.get("http://127.0.0.1:8000/api/productos/").then(response => {
            dispatch({type:Types.GET_POSTS, payload:response.data
            })
        console.log('response', response)
        }
            )
            .catch(err => {
                console.log(err)
                dispatch({type:Types.POSTS_LOADING, payload:false})
            }
            );
    }
}

export const deletePost = (id) => {
    return dispatch => {
        dispatch({type:Types.POSTS_LOADING, payload:true})
        axios.delete("http://127.0.0.1:8000/api/productos/"+id+"/")
            .then(response => {
                dispatch({type:Types.DELETE_POST, payload:id});
            }
            )
            .catch(err => {
                console.log(err)
            }
            );
    }
}

export const createPost = (data,cb) => {
    return dispatch => {
        axios.post("http://127.0.0.1:8000/api/productos/", data)
            .then(response => {
                console.log(response)
                dispatch({type:Types.CREATE_POST, payload:response.data});
                cb()
            }
            )
            .catch(err => {
                console.log(err)
                dispatch({type:Types.POSTS_LOADING, payload:false})
            }
            );
    }
}