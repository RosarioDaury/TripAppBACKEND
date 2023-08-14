const mongoose = require('mongoose');
const {User} = require('../Models/Users.cjs');
const bcrypt = require('bcrypt');

const UsersSeed = [
    new User({
        FirstName: 'Jane',
        LastName: 'Doe',
        Username: 'Jane01',
        Email: 'dauryjoserosariocaba@gmail.com',
        Password: bcrypt.hashSync('12345', 10),
    }),
    new User({
        FirstName: 'Joe',
        LastName: 'Doe',
        Username: 'Joe02',
        Email: 'dauryjoserosariocaba@gmail.com',
        Password: bcrypt.hashSync('12345', 10),
    }),
]

async function Execute () {
    mongoose.connect("mongodb://0.0.0.0:27017/TurismoApp")
    .then(async () => {
        console.log('[GOING] CONNECTED TO MONGO');
        UsersSeed.map(async (el, index) => {
            el.save();
            if(index == UsersSeed.length - 1){
                console.log('DONE')
                mongoose.disconnect(); 
            }
        });    
    })
    .catch(() => console.log('[ERROR] CANNOT CONNECT TO MONGO'))  
}

Execute();



