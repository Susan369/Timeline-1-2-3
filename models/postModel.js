const mongoose = require('mongoose');
const moment = require('moment/moment');

const postSchema = new mongoose.Schema({
    post: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
            return moment(createdAt).format('MMM DD YY, h:mm a');
        }
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'  // Fix: Change 'comment' to 'Comment'
    }]
});

const post = mongoose.model('Post', postSchema);
module.exports = post;
