const userController=require('../controllers/user');
const express= require('express');
const router=express.Router();

router.route('/signup').post(userController.signup);

router.route('/login').post(userController.login);

router.route('/dashboard').post(userController.dashboard);


module.exports=router;

//this section combined in product routes due to multiple exportd router in app.js
