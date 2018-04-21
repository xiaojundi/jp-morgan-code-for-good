
const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
require('dotenv').config();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(compression());

//app.use(require('./routes'));//

app.get('/buddyInfo', (req, res, next) => {
    console.log('hi');
    return res.status(200).send({
        username: 'Billy D',
        role: 'buddy',
        firstName: 'Billy',
        lastName: 'Doe',
        age: 20,
        interests: [{name:'soccer',description:'I like to kick stuff'}, {name:'baseball',description:'I like to hit stuff'}, {name:'video games',description:'I will beat anyone in Call of Duty'}, {name:'pokemon',description:'Pretty self explanitory'}],
        gender: 'Male',
        preferredCommunication: 'In Person',
        email: 'BillyD@example.com',
        employed: false,
        bestTimeToSocialize: 'Weekends',
        travelIndependent: true,
        zipCode: 11238,
        borough: 'Brooklyn',
        description: 'Lorem Ipsum'
    })
});

app.get('/volunteerInfo', (req, res, next) => {
    return res.status(200).send({
        username: 'Jimmy Dean',
        role: 'volunteer',
        firstName: 'Jimmy',
        lastName: 'Dean',
        age: 24,
        interests: [{ name: 'soccer', description: 'I like to kick stuff' }, { name: 'baseball', description: 'I like to hit stuff' }, { name: 'video games', description: 'I will beat anyone in Call of Duty' }, { name: 'pokemon', description: 'Pretty self explanitory' }],
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

app.get('/alreadyPaired', (req, res, next) => {
    return res.status(200).send([
        { buddy: 'Billy D', volunteer: 'Jimmy Dean' },
        { buddy: 'Tim F', volunteer: 'Richard W' },
        { buddy: 'Jenna W', volunteer: 'Jessica P' },
        { 'buddy': 'DeeAnna P', volunteer: 'Valerie W' },
        { 'buddy': 'David O', volunteer: 'Chris' }
    ])
})

app.get('/potentialPairs', (req, res, next) => {
    return res.status(200).send({

    })
});

app.get('/volunteerWaitlist', (req, res, next) => {
    return res.status(200).send([
        'Jessica A',
        'Phil B',
        'Mohammed W',
        'Billy James',
        'Namita A',
        'Remel K',
    ])
})

app.get('/buddyWaitlist', (req, res, next) => {
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

app.get('/',(req,res,next)=>{
    return res.status(200).send('Guucii');
})


app.listen(5000);

