import axios from "axios";

const serverApi = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
    timeout: 3000,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default serverApi;
