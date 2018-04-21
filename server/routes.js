const router = require('express').Router();

router.get('/buddyInfo',(req,res,next)=>{
   return res.status(200).send({
        username:'Billy D',
        role:'buddy',
        firstName: 'Billy',
        lastName: 'Doe',
        age: 20,
        interests: ['soccer','baseball','video games','pokemon'],
        gender: 'Male',
        preferredCommunication: 'In Person',
        email: 'BillyD@example.com',
        employed: false,
        bestTimeToSocialize:'Weekends',
        travelIndependent: true,
        zipCode: 11238,
        borough: 'Brooklyn',
        description: 'Lorem Ipsum'
    })
});

router.get('/volunteerInfo',(req,res,next)=>{
   return res.status(200).send({
        username: 'Jimmy Dean',
        role: 'volunteer',
        firstName: 'Jimmy',
        lastName: 'Dean',
        age: 24,
        interests: ['soccer', 'baseball', 'video games', 'pokemon'],
        gender: 'Male',
        preferredCommunication: 'In Person',
        email: 'JimmyD@example.com',
        employed: false,
        bestTimeToSocialize: 'Weekends',
        travelIndependent: true,
        zipCode: 11238,
        borough: 'Brooklyn',
        description: 'Lorum Ipsum'
    })
});

router.get('/alreadyPaired',(req,res,next)=>{
   return res.status(200).send([
        {buddy:'Billy D',volunteer:'Jimmy Dean'},
        {buddy:'Tim F',volunteer:'Richard W'},
        {buddy:'Jenna W',volunteer:'Jessica P'},
        {'buddy':'DeeAnna P',volunteer:'Valerie W'},
        {'buddy':'David O',volunteer:'Chris'}
    ])
})

router.get('/potentialPairs',(req,res,next)=>{
    return res.status(200).send({

    })
});

router.get('/volunteerWaitlist',(req,res,next)=>{
    return res.status(200).send([
        'Jessica A',
        'Phil B',
        'Mohammed W',
        'Billy James',
        'Namita A',
        'Remel K',
    ])
})

router.get('/buddyWaitlist',(req,res,next)=>{
    return res.status(200).send([
        'Bob A',
        'David B',
        'Jimmy Z',
        'Michael T',
        'Jen F',
        'Alex R',
        'Maya O'
    ])
});

module.exports = router;