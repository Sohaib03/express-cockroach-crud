const router = require('express').Router();
const {loginUser} = require('../controllers/users');
const jwt = require('jsonwebtoken');

router.post("/login", loginUser);

module.exports = router;