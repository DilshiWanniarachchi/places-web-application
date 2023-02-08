const express = require('express');

const router = express.Router();

const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Dilshi W',
        email: 'dilshi@gmail.com',
        password: 'dilshi123',
    },
];

module.exports = router;