
const Users = require('../../config/sequelize').Users;
const Buddies ;
const Volunteers;
const Admin;

const roleMapping = {
    'buddies': Buddies,
    'volunteers': Volunteers,
    'admin': Admin,
}

const getUserInfo = (req,res,next)=>{
    let userInfo;
    
    res.status(200).send({
        username: 'Billy D',
        role:'buddy'
    })
    /*
    if(!req.body.userName){
        return res.status(401).send('Please send a userName');
    }
    Users.find({where:{userName:req.body.userName}})
    .then((user)=>{
        if(!user){
            return Promise.reject(404);
        }
        userInfo = user;
        return roleMapping[user.role].find({where:{id:user.refToInfo}});
    })
    .then((info)=>{
        if(!info){
            return Promise.reject(404);
        }
        userInfo['info'] = info;
        return res.status(200).send(userInfo);
    })
    .catch((err)=>{
        if(err === 404){
            return res.status(404).send('User not found');

        }
        return res.status(500).send('Internal Server error.');
    })
    */
}


module.exports = {
    getUserInfo:getUserInfo,
}