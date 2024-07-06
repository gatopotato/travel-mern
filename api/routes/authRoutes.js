const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup',authController.signup);
router.post('/signin',authController.signin);
router.post('/google',authController.googleSignIn);
router.post('/signout',authController.signout);



module.exports = router;