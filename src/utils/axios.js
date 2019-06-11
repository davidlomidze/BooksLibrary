import axios from "axios";
import * as requests from "./constants/requests";

// create axios custom instance with custom config
const customAxios = axios.create({
    baseURL: requests.API_URL,
    headers: {
        common: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    }
});

export default customAxios;