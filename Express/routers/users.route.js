const express = require('express');
const router = express.Router();



router.get('/register', (req, res) => {
    res.send('This request is register page');
});

router.get('/login', (req, res) => {
    res.send('This is login page');
});

module.exports = router;
