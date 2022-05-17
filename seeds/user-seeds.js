const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'adelle21',
        email: 'adelle12@gmail.com',
        password: 'password321'
    }, {
        username: 'tarah98',
        email: 'tarah98@gmail.com',
        password: 'password321'
    }, {
        username: 'Rhaza90',
        email: 'rHaza90@gmail.com',
        password: 'password321'
    }, {
        username: 'happyday10',
        email: 'happyhappy31@gmail.com',
        password: 'password321'
    }, {
        username: 'codingRocks02',
        email: 'codingrocks23@gmail.com',
        password: 'password321'
    }, {
        username: 'noway64',
        email: 'noway64@yahoo.com',
        password: 'password321'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;