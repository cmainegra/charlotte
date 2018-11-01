import axios from "axios";

export default {
    registerUser: (email, password) => {
        console.log("running");
        return axios.post("api/user", { email: email, password: password});
    },
    handleSubmit: (numbers) => {
        console.log("submitting numbers");
        return axios.post("api/numbers", { numbers });
    }
    
};