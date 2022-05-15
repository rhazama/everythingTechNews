const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'adelle21',
        email: 'adelle12@gmail.com',
        password: 'nonono'
    }, {
        username: '',
        email: '',
        password: ''
    }, {
        username: '',
        email: '',
        password: ''
    }, {
        username: '',
        email: '',
        password: ''
    }, {
        username: '',
        email: '',
        password: ''
    }, {
        username: '',
        email: '',
        password: ''
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;