const express = require('express'); 
const userController = require('../controllers/users.controllers');
const router = express.Router()

router.get('/', userController.getAll)
router.get("/getOneUser/:id", userController.getOne)
router.post("/addUser", userController.addOne)
router.put("/updateUser/:id", userController.update)
router.delete("/deleteUser/:id", userController.delete)


module.exports=router