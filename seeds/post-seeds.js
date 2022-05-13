const { Post } = require('../models');

const postData = [
    {
        title: 'Riot Games',
        post_text: 'Riot Game News',
        user_id: 1
    },
    {
        title: 'Apple',
        post_text: 'Apple News',
        user_id: 2
    },
    {
        title: 'Tesla',
        post_text: 'Tesla News',
        user_id: 3
    },
    {
        title: 'Bitcoin',
        post_text: 'Bitcoin News',
        user_id: 4
    },
    {
        title: 'Nintendo',
        post_text: 'Nintendo News',
        user_id: 5
    },
    {
        title: 'Google',
        post_text: 'Google News',
        user_id: 6
    },  {
        title: 'Samsung',
        post_text: 'Samsung News',
        user_id: 7
    },  {
        title: 'Amazon',
        post_text: 'Amazon News',
        user_id: 8
    },
    {
        title: 'Facebook',
        post_text: 'Facebook News',
        user_id: 9
    },
    {
        title: 'Twitter',
        post_text: 'Twitter News',
        user_id: 10
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;