const { Comment } = require('../models');

const commentData = [
    {
        comment_text: '',
        user_id: '',
        post_id: ''
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;