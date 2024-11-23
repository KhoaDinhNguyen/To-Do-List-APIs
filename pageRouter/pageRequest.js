const express = require('express');
const query = require('./pageQueries');

const pageRouter = express.Router();

pageRouter.get('/', (req, res) => {
    res.send("Hello World");
})
pageRouter.post('/login', query.getAccountName, query.validateAccountName);
pageRouter.post('/signUp', query.createAccount);

module.exports = pageRouter;