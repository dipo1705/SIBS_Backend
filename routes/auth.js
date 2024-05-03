const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');


router.post('/login', auth.login);
router.get('/logout', auth.logout);
router.post('/signup', auth.register);
module.exports = router;