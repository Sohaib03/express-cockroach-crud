const router = require('express').Router();
const { postNewBlog, getRecentBlogs, getBlogById } = require('../controllers/blogs');
const { verifyToken } = require('../middlewares/auth');

router.post("/create",verifyToken, postNewBlog);
router.get("/recent", getRecentBlogs);
router.get("/:id", getBlogById);

module.exports = router;