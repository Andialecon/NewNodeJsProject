const express = require('express');
const router = express.Router();
const { getLogin } = require('../controllers/auth.controllers')

router.post('/', getLogin)

module.exports = router