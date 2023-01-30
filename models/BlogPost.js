// Data Base
const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost/my_database",{useNewUrlParser:true});
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title:String,
    body:String,
    username:String,
    datePosted:{
        /* can declare prototype with an object like this because we need 'default'*/
        type:Date,
        default:new Date()
    },
    image: String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost;