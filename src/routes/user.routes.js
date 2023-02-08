const express = require('express');
const router = express.Router();
const { getUser, getUsers, createUser, updateUser, deleteUser } = require('../controllers/users.controllers')

router.get('/', getUsers)
router.get('/:publicAddress',  getUser)
router.post('/', createUser)
router.put('/:publicAddress', updateUser)
router.delete('/:addressUser', deleteUser)

module.exports=router;