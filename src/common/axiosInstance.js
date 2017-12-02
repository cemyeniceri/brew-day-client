import axios from "axios";
import store from "../store";
import {showLoadingPage, hideLoadingPage} from "../components/loadingPage/actions";
import {handleHttpError} from "../util/index";

const axiosInstance = axios.create({
    headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')}
});

axiosInstance.interceptors.request.use(function (config) {
    store.dispatch(showLoadingPage());
    return config;
},function (error) {
    store.dispatch(handleHttpError(error));
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    function (success) {
        store.dispatch(hideLoadingPage());
        return success;
}, function (error) {
        store.dispatch(handleHttpError(error));
        return Promise.reject(error);
});

export default axiosInstance;
