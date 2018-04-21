const passport = require('passport');
const LocalStrategy = require('passport-local');

localAuthenticate = (User,username,password,done)=>{
    User.find({where:{username:username}})
    .then(user =>{
        if(!user){
            return done(null);
        }
    })
}