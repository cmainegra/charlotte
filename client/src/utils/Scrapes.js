
// module.exports {
   
//     axios.get("https://www.lotteryusa.com/new-jersey/mega-millions/").then(function(response) {

//         var $ = cheerio.load(response.data);

//         $("numbers ul").each(function(i, element) {
//             var result = {};

//             console.log()
        
//         })
//     })
// };

import axios from "axios";
import cheerio from "cheerio";

export default {
    registerUser: (email, password) => {
        console.log("running");
        return axios.post("api/user", { email: email, password: password});
    },
    handleSubmit: (num1, num2, num3, num4, num5, num6) => {
        console.log("submitting numbers");
        return axios.post("api/numbers", { num1: num1, num2: num2, num3: num3, num4: num4, num5: num5, num6: num6 });
    },
    // scrapeLottery: (link, target, callback) => {
    //     axios.get(link).then( response => {
    //         var $ = cheerio.load(response.data);
    //         var data = "test";
    //         $(target).each( (i, element)=> {
    //             console.log(element);
    //         });
    //         callback(data);
    //     });
    //     // callback("testme");
    // } 
    
};

