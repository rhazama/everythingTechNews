const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'I agree with this article',
        user_id: '3',
        post_id: '1'
    }, {
        comment_text: 'Great article',
        user_id: '3',
        post_id: '2'
    }, {
        comment_text: 'I disagree',
        user_id: '2',
        post_id: '3'
    }, {
        comment_text: 'everythingTech Rocks',
        user_id: '1',
        post_id: '4'
    }, {
        comment_text: 'Thanks for the information',
        user_id: '7',
        post_id: '5'
    }, {
        comment_text: 'Love this article',
        user_id: '5',
        post_id: '6'
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;