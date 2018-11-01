
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
    handleSubmit: (numbers) => {
        console.log("submitting numbers");
        return axios.post("api/numbers", { numbers });
    }
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

