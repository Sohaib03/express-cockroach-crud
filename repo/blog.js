const {runQuery} = require('./db');

async function selectRecentBlogs() {
    const query = "SELECT post_id, title, description, date_created, writer_id FROM blog_posts ORDER BY date_created DESC LIMIT 10;";
    const results = await runQuery(query);
    return results;
}

async function selectBlogByUsername(username) {
    const query = {
        name: 'fetch-blogs-by-username',
        text: 'SELECT blog_posts.* FROM blog_posts JOIN accounts ON blog_posts.writer_id = accounts.user_id WHERE accounts.username = $1 ORDER BY blog_posts.date_created DESC LIMIT 10;',
        values: [username],
    }
    const results = await runQuery(query);
    return results;
}

async function selectBlogByUserId(user_id) {
    const query = {
        name: 'fetch-blogs-by-user_id',
        text: 'SELECT post_id, title, description, date_created, writer_id FROM blog_posts WHERE writer_id = $1 ORDER BY date_created DESC LIMIT 10;',
        values: [user_id],
    }
    const results = await runQuery(query);
    return results;
}

async function selectBlogById(blog_id) {
    const query = {
        name: 'fetch-blog-by-id',
        text: 'SELECT * FROM blog_posts WHERE blog_id = $1;',
        values: [blog_id],
    }
    const results = await runQuery(query);
    return results;
}

async function addNewBlog(blog_data) {
    const query = {
        name: 'create-new-blog',
        text: 'INSERT INTO blog_posts (title, content, description, writer_id) VALUES ($1, $2, $3, $4);',
        values: [blog_data.title, blog_data.content, blog_data.description, blog_data.writer_id],
    }
    const results = await runQuery(query);
    return results;
}

module.exports = {
    addNewBlog,
    selectRecentBlogs,
    selectBlogByUsername,
}