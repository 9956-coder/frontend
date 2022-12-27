const productController=require('../controllers/product');
const userController=require('../controllers/user');
const express= require('express');
const router=express.Router();


router.post("/add",productController.add);
router.get("/getAllProduct",productController.getAllProduct);
router.get("/getProduct",productController.Product);
router.route('/signup').post(userController.signup);

router.route('/login').post(userController.login);

router.route('/dashboard').post(userController.dashboard);



module.exports=router;
