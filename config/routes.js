const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController')

router.get('/', postController.getAllPosts);
router.post('/create-post', postController.createPost);
router.post('/posts/:postId/create-comment', commentController.createComment)

module.exports = router;