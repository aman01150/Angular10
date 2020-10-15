const express = require('express');
const router = express.Router();

// CRUD Operations of Admin
router.post('/login', (request , response) => {
        response.json({
            message : 'Login Logic'
        });
    });

router.post('/register', (request , response) => {
    response.json({
        message : 'Registration Logic'
    });
});

module.exports = router;
