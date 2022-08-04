var express = require('express');
const authController = require('../controllers/authController');
var userController= require('../controllers/userController');
var router = express.Router();

router.get('/profile',authController.verifyUser,userController.profile)
router.put('/profile',authController.verifyUser,userController.editProfile)

//Local
router.post('/local', authController.verifyUser,userController.createLocal)
router.put('/local/:id', authController.verifyUser,userController.editLocal)
router.delete('/local/:id', authController.verifyUser,userController.removeLocal)
router.get('/myLocals',authController.verifyUser,userController.showMyLocal);
router.get('/locals',authController.verifyUser,userController.showAllLocals);
router.get('/showLocal/:id',userController.showLocal);


module.exports = router;
