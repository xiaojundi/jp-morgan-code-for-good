const Buddies;
const Volunteers;
const Admin;

const sequelize = require('sequelize');

const alreadyPaired = (req,res,next)=>{
    const paired= {};
    return Buddies.find({where:{paired:true}})
    .then((buddies)=>{
        paired['buddies'] = buddies;
        return Volunteers.find({where:{paired:true}})
    })
    .then((volunteers)=>{
        paired['volunteers'] = volunteers;
        return res.status(200).send(paired);
    })
    .catch((err)=>{
        return res.send(500).send(err);
    })
}

const potentialPairs = (req,res,next) =>{

}

const waitlist = (req,res,next)=>{

}