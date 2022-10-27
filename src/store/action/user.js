import axios from "axios"
import { userConstants } from "../constant/user"
import { REACT_APP_DEVELOPMENT_URL } from "../../config"

export const register = (datas, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: userConstants.REGISTER_REQUEST })
            const result = await axios.post(`${REACT_APP_DEVELOPMENT_URL}/user`, datas)
            dispatch({ type: userConstants.REGISTER_SUCCESS, payload: result.data })
            history.push('/login')
        }
        catch (error) {
            let response = error.response.data
            let resPayload = response.data.length > 0 ? response.data : response.message
            dispatch({ type: userConstants.REGISTER_FAILURE, payload: resPayload })
        }
    }
}

export const login = (data, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: userConstants.LOGIN_REQUEST })
            const result = await axios.post(`${REACT_APP_DEVELOPMENT_URL}/user/signIn`, data)
            dispatch({ type: userConstants.LOGIN_SUCCESS, payload: result.data.data })
            localStorage.setItem("token", result.data.data.token)
            localStorage.setItem("email", result.data.data.email)
            history.push("/dashboard")
        }
        catch (error) {
            let response = error.response.data
            let resPayload = response.data.length > 0 ? response.data : response.message
            dispatch({ type: userConstants.LOGIN_FAILURE, payload: resPayload })
        }
    }
}

export const handleSuccess = () => {
    return async (dispatch) => {
        dispatch({ type: userConstants.HANDLE_SUCCESS })
    }
}

export const getData = (data) => {
    return async (dispatch) => {
        try{
            dispatch({ type: userConstants.GETDATA_REQUEST })
            const result = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
            console.log(result)
            dispatch({ type: userConstants.GETDATA_SUCCESS, payload: result.data.photos })
        }
        catch(error){
            console.log(error)
        }
    }
}


