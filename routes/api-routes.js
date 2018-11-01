// module.exports = function(app, passport, User) {
//     passport.serializeUser ( (user, done) => {
//         done(null, user.profileId);
//     });
//     passport.deserializeUser( (profileId, done) => {
//         User.findOne({
//             profileId: profileId
//         })
//         .then( user => {
//             console.log(user);
//             done(null, user);
//         })
//         .catch( err => {
//             done(error, false);
//         })
//     });
//     app.get('api/email', (req, res) => {
//         console.log(req.user);
//         if(req.isAuthenticated()) {
//             res.json({
//                 user: req.user
//             });
//         }
//         else{
//             res.json({
//                 error: "You are not logged in"
//             })
//         }
//     });
//     app.get('auth/google',
//         passport.authenticate('google', { scope: ['profile', 'email', 'password']}));
//     app.get('auth/google/callback', 
//         passport.authenticate('google', { failureRedirect: "https://localhost:3000/" }),
//         function(req, res) {
//             res.redirect("http://localhost:3000/")
//         });
//     app.get("*", (link, target, callback) => {
//         axios.get(link).then( response => {
//             var $ = cheerio.load(response.data);
//             var data = "test";
//             $(target).each( (i, element)=> {
//                 console.log(element);
//             });
//             callback(data);
//         });
//     })
// };
