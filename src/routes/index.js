const router = require ('express').Router();
const user = require('./user.routes');
const auth = require('./auth.routes');

router.use('/login', auth)
router.use('/users', user);


module.exports =router;