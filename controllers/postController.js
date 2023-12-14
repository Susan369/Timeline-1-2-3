const Post = require('../models/postModel')
const comment = require('../models/commentModel')
const getAllPosts = async (req, res) => {
    const posts = await Post.find({}).populate("comments", "comment").sort({create_at:-1})
    res.render('index',{posts, err: ''})
}

const createPost = async (req, res) => {
    if(req.body.post.length<25){
        const posts = await Post.find({}).sort({create_at:-1})
        res.render('index', {posts, err:'Shuld be longer than 25'})
    }else{
        const newPost = new Post(req.body)
        await newPost.save()
        res.redirect('/')
    }
}

module.exports = {getAllPosts, createPost}