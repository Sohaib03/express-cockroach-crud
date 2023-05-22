const { selectRecentBlogs, selectBlogByUsername, addNewBlog} = require('../repo/blog');

const postNewBlog = async (req, res) => {

    console.log(req.body);
    let title = req.body.title;
    let content = req.body.content;
    let description = req.body.description;
    let writer_id = req.user.user_id;

    let blog_data = {
        title,
        content,
        description,
        writer_id
    }

    console.log(blog_data);

    if (!title || !content || !description) {
        return res.status(400).send("Please provide all required fields!");
    }

    await addNewBlog(blog_data);
    return res.status(200).send("Blog created!"); 
}

const getRecentBlogs = async (req, res) => {
    let results = await selectRecentBlogs();
    console.log(results);
    return res.status(200).send(results); 
}

const getBlogById = (req, res) => {
    return res.status(200).send("Blog by id : " + req.params.id); 
}

module.exports = {
    postNewBlog, 
    getRecentBlogs,
    getBlogById
}