import { Router } from "express";
const router = Router();


/**import all controllers */
import * as controller from '../controller/appController.js'
import Auth, { localVariables } from "../middleware/auth.js"
import { registerMail } from "../controller/mailer.js";


/** POST Methods  USED TO CREATE A USER */
router.route('/register').post(controller.register)
router.route('/registerMail').post(registerMail); //send the email
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser, controller.login);  // login the app



/**GET Methods USED TO RETERIVE A RESOURCE */
router.route('/user/:username').get(controller.getUser) //user with username
router.route('/generateOTP').get(controller.verifyUser,localVariables,controller.generateOTP)  // generate random otp
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP)   // verify genrated otp
router.route('/createResetSession').get(controller.createResetSession)  // reset all the varaible



/**PUT Methods USED TO UPDATE THE USER */
router.route('/updateUser').put(Auth, controller.updateUser) // is use to update the user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword) // use to reset password

export default router 