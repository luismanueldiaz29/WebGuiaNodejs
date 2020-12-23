const express = require('express');
const router = express.Router();
const siteRouter = require('./site.router.js')

router.get('/', (req, res) => {
    res.json({'mess': 'Index'});
})

module.exports = (app) => {
    app.use('/api', router);
    app.use('/api/site', siteRouter);
}