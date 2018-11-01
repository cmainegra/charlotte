const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// const numbers = require("./routes/api/numbers")
// const passportGoogleAuth20 = require("passport-google-oauth20");
// const GoogleStrategy = require("passport-google-oauth20").Stategy;
// const User = require("./models/user.js");
// const numbers = require('./models/numbers.js')

if(typeof process.env.MONGODB_URI !== 'undefined' && process.env.MONGODB_URI > 0){
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
}
else{
    mongoose.connect("mongodb://localhost/charlotte", { useNewUrlParser: true});
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
    secret: "hello from charlie",
    resave: true,
    saveUninitialized: true,
    secure: false
}));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
};

// app.use(passport.initialize());
// app.use(passport.session());

// console.log(
//     {
//         functionName: "passport use inputs in server.js",
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: process.env.GOOGLE_CALLBACK
//     }
// );

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: process.env.GOOGLE_CALLBACK
// },
// function(accessToken, refreshToken, data, cb) {
//     var email = data.emails[0].value;
//     var profileId = data.id;
//     User.findOne({
//         profileId: profileId
//     })
//     .then( user => {
//         if(!user) {
//             User.create({
//                 profileId: profileId,
//                 email: email,
//                 password: password

//             }).then (user => {
//                 return cb(null, user);
//             });
//         }
//         else{
//             return cb(null, user);
//         }
//     }).catch( err => {
//         console.log(err);
//         return cb(err, null);
//     })
// }
// ));

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// app.get("/testdb", (req, res) => {
//     User.create({
//         profileId: "1",
//         email: "test@test",
//         password: "test"
//     }).then( data => {
//         console.log(data);
//         res.json(data);
//     });

// });

// require('./routes/api-routes')(app, passport, User);



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`);
});