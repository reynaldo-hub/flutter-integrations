const express = require('express');

const router = express.Router();
const get = require('../components/users');

router.get('/', (request, response) => get(request, response));

module.exports = router;
