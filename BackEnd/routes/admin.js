var express = require('express');
var adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

var router = express.Router();

//Profile/Edit Admin
router.get('/profile',authController.verifyAdmin,adminController.profile)
router.put('/profile',authController.verifyAdmin,adminController.editProfile)

//Criar Admin
router.post('/createAdmin', authController.verifyAdmin,adminController.createAdmin);

//Admin
router.get('/admins', authController.verifyAdmin,adminController.showAdmins);
router.get('/admins/:id', authController.verifyAdmin,adminController.showAdmin);
//router.put('/admin/:id', authController.verifyAdmin,adminController.editAdmin);
router.delete('/admins/:id', authController.verifyAdmin,adminController.deleteAdmin);

//User
router.get('/users', authController.verifyAdmin,adminController.showUsers);
router.get('/users/:id', authController.verifyAdmin,adminController.showUser);
//router.put('/user/:id', authController.verifyAdmin,adminController.editUser);
router.delete('/users/:id', adminController.deleteUser);

//Locals
router.get('/locals',authController.verifyAdmin,userController.showAllLocals);
router.get('/showLocal/:id',userController.showLocal);
router.delete('/local/:id', adminController.removeAdminLocal)

module.exports = router;

