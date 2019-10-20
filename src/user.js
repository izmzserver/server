const express = require('express');

const Router = express.Router();

Router.get('/login', (req, res) => {
    return res.json({success: true, code: 0, data: {
        name: 'zhangsan',
        age: 22,
    }})
})

module.exports = Router;