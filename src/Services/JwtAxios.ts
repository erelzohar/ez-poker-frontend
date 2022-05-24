import axios from "axios";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { userLoggedOutAction } from "../Redux/AuthState";
import Store from "../Redux/Store";
import { toast } from "react-toastify";

// creating axios instance:
const jwtAxios = axios.create();

// Add a request interceptor :
jwtAxios.interceptors.request.use(request => {

    // If user logged in:
    if (Store.getState().authState.user) {

        //check if the token has expired
        const decodedToken: JwtPayload = Store.getState().authState.user?.token ? jwtDecode(Store.getState().authState.user?.token) : null
        if (decodedToken.exp < Date.now() / 1000) {
            Store.dispatch(userLoggedOutAction());
            toast("Your login session has expired");
        }

        // Add the token to request headers:
        request.headers = {
            "authorization": "Bearer " + Store.getState().authState.user?.token
        };
    }

    return request;
});

jwtAxios.interceptors.response.use(response => response,
    error => {
        if (error.response === 401) {
            toast(error);
        }
        return Promise.reject(error);
    });

export default jwtAxios;