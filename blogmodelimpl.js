const Blog = require('./blog');

const blogByTitle = (title) => {
    return Blog.find({title: title}).exec();     //.exec function makes a query a promise
}

const blogByAuthor = (id) => {
    return Blog.find({author: id}).populate('author').exec();     //populate displays details of author from diff collection(foreign key)
}

const blogsSortedByCreatedAt = () => {
    return Blog.find({}).sort('-date').exec();
}

const blogTitleByAuthor = (id) => {
    return Blog.find({author: id}).select({title: 1, description: 1}).exec();
}

module.exports = {
    blogByTitle, blogByAuthor, blogsSortedByCreatedAt, blogTitleByAuthor
}