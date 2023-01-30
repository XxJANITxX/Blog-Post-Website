const BlogPost = require('../models/BlogPost.js');

module.exports = async (req,res)=>{
    console.log("I am awake");
    const blogposts = await BlogPost.find({});
    console.log(req.session);
    res.render('index',{
        blogposts
    });
}