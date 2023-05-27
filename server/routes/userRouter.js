const express = require('express')
const {getUsers,updateUser,getUser,createUser,deleteUser} = require('../controller/auth')
const verifyToken = require('../middleware/verify_token')

const router = express.Router()

router.get('/users',verifyToken,getUsers)
router.get('/users/:id',verifyToken,getUser)
router.post('/users',verifyToken,createUser)
router.patch('/users/:id',verifyToken,updateUser)
router.delete('/users/:id',verifyToken,deleteUser)


module.exports = router