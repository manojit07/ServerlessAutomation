const express = require('express');

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    res.status(200).json({"key1": "sample value for test API"});
});

module.exports = {
    routes,
};

