import axios from "axios";

export default {
    registerUser: (email, password) => {
        console.log("running");
        return axios.post("api/user", { email: email, password: password});
    },
    handleSubmit: (num1, num2, num3, num4, num5, num6) => {
        console.log("submitting numbers");
        return axios.post("api/numbers", { num1: num1, num2: num2, num3: num3, num4: num4, num5: num5, num6: num6 });
    }
    
};