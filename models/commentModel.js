const mongoose = require('mongoose');
const moment = require('moment/moment');

const commentSchema = new mongoose.Schema({
    comment: {
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
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
});

const comment = mongoose.model('Comment', commentSchema);
module.exports = comment;

