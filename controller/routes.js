const router = require("express").Router();
const userController = require("./user_controller");
const {jwtVerify, removeSession} = require("./jwt");

router.post("/login", userController.loginUser);
router.post("/signup", userController.createUser);

//after authentication
router.post("/fetch", jwtVerify, userController.fetchUser);
router.get("/logout", removeSession);


module.exports = router;