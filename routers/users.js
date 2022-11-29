const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/users')

router.get('/users', UsersController.list);

router.get('/users/:id', UsersController.show);

router.post('/users', UsersController.create);

router.put('/users/:id', UsersController.update);

router.delete('/users/:id', UsersController.remove);






module.exports = router