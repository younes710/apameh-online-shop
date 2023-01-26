import axios from "axios";

class HttpService {

    get(url) {
        return axios.get(url);
    }

    post(url) {
        return axios.post(url);
    }

    put(url) {
        return axios.put(url);
    }

    patch(url) {
        return axios.patch(url);
    }

    delete(url) {
        return axios.delete(url);
    }
}

export default new HttpService();