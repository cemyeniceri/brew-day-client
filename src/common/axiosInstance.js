import axios from "axios";
import store from "../store";
import {showLoadingPage, hideLoadingPage} from "../components/loadingPage/actions";
import {handleHttpError} from "../util/index";

let axiosObject = null;
let tokenIsCreated = false;

export const createAxiosInstance = () => {
    axiosObject = axios.create({
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')}
    });

    if(localStorage.getItem('token') !== null) {
        tokenIsCreated = true;
    }

    axiosObject.interceptors.request.use(function (config) {
        store.dispatch(showLoadingPage());
        return config;
    },function (error) {
        store.dispatch(handleHttpError(error));
        return Promise.reject(error);
    });

    axiosObject.interceptors.response.use(
        function (success) {
            store.dispatch(hideLoadingPage());
            return success;
        }, function (error) {
            store.dispatch(handleHttpError(error));
            return Promise.reject(error);
        });
};

export const removeToken = () => {
    localStorage.removeItem('token');
    tokenIsCreated = false;
};

const axiosInstance = () => {
    if(axiosObject === null) {
        createAxiosInstance();
    } else if(!tokenIsCreated){
        createAxiosInstance();
    }

    return axiosObject;
};

export default axiosInstance;
