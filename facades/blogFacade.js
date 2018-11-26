var mongoose = require("mongoose");
var Blog = require("../models/LocationBlog");

function getAllBlogs() {
    return Blog.find({}).exec();
}7

function addBlog(info, author, longitude, latitude) {
    var locBlogDetail = {info, author, pos:{longitude, latitude}};
    var blog = new Blog(locBlogDetail);
    return blog.save(); 
}

function findById(id){
    return Blog.findById({_id:id}).exec();
}

async function likeLocBlog(id, user_id) {
    // first we get the locationblog that is equal to the locationBlogId, 
    var blog = await Blog.findById({_id:id}).exec();
    blog.likedBy.push(user_id);
    return blog.save();
}

var blogFacadeObject = {
    getAllBlogs:getAllBlogs,
    addBlog:addBlog,
    findById:findById,
    likeLocationBlog:likeLocBlog
}

module.exports = blogFacadeObject